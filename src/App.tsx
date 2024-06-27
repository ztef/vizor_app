// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ClientProvider from './ClientProvider';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import {Main} from './pages/app/Main';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <ClientProvider>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          } 
        />
      </Routes>
      </ClientProvider>
    </AuthProvider>
  </Router>
);

export default App;


