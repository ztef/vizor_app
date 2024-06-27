
import { client } from '../../client'

import { useAuth } from '../../AuthContext';

import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

import mini_logo from "../../assets/mini_logo.png";

const { Header, Sider, Content } = Layout;

export const Main: React.FC = () => {

  const { logout } = useAuth();


  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = async () => {
    
      await client.logout()
      logout();
     
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>

        <div className="logo" style={{ color: 'white', padding: '16px', textAlign: 'center' }}>
          <img src={mini_logo} alt="Logo" style={{ width: 30, marginBottom: 20 }} />
          {collapsed ? 'Logo' : 'My App'}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<FontAwesomeIcon icon={faHome} />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<FontAwesomeIcon icon={faUser} />}>
            Profile
          </Menu.Item>
          <Menu.Item key="3" icon={<FontAwesomeIcon icon={faCog} />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
          <Button type="link" onClick={toggle} style={{ fontSize: '16px', marginLeft: '16px' }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout} style={{ marginRight: '16px' }}>
            Logout
          </Button>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          Main working area
        </Content>
      </Layout>
    </Layout>
  );
};


