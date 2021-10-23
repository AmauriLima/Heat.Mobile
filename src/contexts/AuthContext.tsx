import React, { createContext, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import { Alert } from 'react-native';
import AuthService, { User } from '../services/AuthService';

interface IAuthContext {
  user: User | null,
  isSigningIn: boolean,
  signIn: () => Promise<void>,
  signOut: () => Promise<void>,
}

interface IAuthProviderProps {
  children: React.ReactNode
}

interface IAuthorizationResponse {
  params: {
    code?: string,
    error?: string,
  },
  type?: string,
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  const CLIENT_ID = 'e50a052318d54a659913';
  const SCOPE = 'read:user';

  async function signIn() {
    try {
      setIsSigningIn(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
      const authSessionResponse = await AuthSession.startAsync({
        authUrl,
      }) as IAuthorizationResponse;

      if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
        const { user: userData } = await AuthService.signIn(authSessionResponse.params.code);
        setUser(userData);
      }
    } catch {
      Alert.alert('Acesso negado');
    } finally {
      setIsSigningIn(false);
    }
  }

  async function signOut() {
    setUser(null);
    await AuthService.signOut();
  }

  useEffect(() => {
    (async () => {
      const userData = await AuthService.refreshToken();

      if (userData) {
        setUser(userData);
      }

      setIsSigningIn(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user,
      isSigningIn,
    }}
    >
      {children}
    </AuthContext.Provider>

  );
}

export { AuthProvider, AuthContext };
