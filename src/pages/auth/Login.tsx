import { client } from '../../client'

import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { Form, Input, Button, Alert, Card, Typography, Space } from 'antd';
import { GithubOutlined, LockOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import logo from "../../assets/logo.png";


const { Title } = Typography;

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error|null>(null)

  const handleLogin = async () => {
   try {
      await client.authenticate({
        strategy: 'local',
        email,
        password
      });

      
     
    } catch (error: any) {

      console.log("Hubo error")
      setError(error)
    }
    
  }
  const handleSignup = async () => {

    navigate('/signup')
    
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
    }}>

    <div className="login flex min-h-screen bg-neutral justify-center items-center">
      <Card style={{width:400}} className="shadow-xl">
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: 100, marginBottom: 20 }} />
          
          <Title level={1} style={{ marginTop: '20px', marginBottom: '20px' }}>VIZOR</Title>
        </div>
        <Form onFinish={handleLogin} layout="vertical">
          {error && (
            <Alert
              message={error.message}
              type="error"
              showIcon
              icon={<ExclamationCircleOutlined />}
              style={{ marginBottom: '20px' }}
            />
          )}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          {error && <p className="login-error">Login failed. Please try again.</p>}

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

     
          <Form.Item>
            <Button type="default" block onClick={handleSignup}>
              Signup
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="default" block icon={<GithubOutlined />}>
              <a href="http://localhost:3030/oauth/github">Login with GitHub</a>
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>

    </div>
  );
};

export default Login;
