import React from 'react';
import { TouchableOpacity } from 'react-native';

import LogoSvg from '../../assets/images/logo.svg';
import { useAuth } from '../../hooks/UseAuth';

import UserImage from '../UserImage';
import { Container, LogoutButton, LogoutText } from './style';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <LogoSvg />

      <LogoutButton>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <LogoutText>Sair</LogoutText>
          </TouchableOpacity>
        )}

        <UserImage imageUri={user?.avatar_url} />
      </LogoutButton>
    </Container>
  );
}
