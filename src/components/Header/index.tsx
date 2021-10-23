import React from 'react';
import { TouchableOpacity } from 'react-native';

import LogoSvg from '../../assets/images/logo.svg';

import UserImage from '../UserImage';
import { Container, LogoutButton, LogoutText } from './style';

export default function Header() {
  return (
    <Container>
      <LogoSvg />

      <LogoutButton>
        <TouchableOpacity>
          <LogoutText>Sair</LogoutText>
        </TouchableOpacity>

        <UserImage imageUri="https://github.com/AmauriLima.png" />
      </LogoutButton>
    </Container>
  );
}
