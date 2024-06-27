import React, { ReactNode, useEffect } from 'react';
import { useAuth } from './AuthContext';
import {client, User} from './client'; // Assume client is imported from wherever it's defined


interface ClientProviderProps {
    children: ReactNode;
  }
  
  const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {

  const { login, logout } = useAuth();

  useEffect(() => {
    client.on('login', ({ user }: { user: User }) => login(user));
    client.on('logout', () => logout());

    // Cleanup on unmount
    return () => {
      //client.off('login');
      //client.off('logout');
    };
  }, [login, logout]);

  return <>{children}</>;
};

export default ClientProvider;
