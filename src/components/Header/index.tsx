import React from 'react';

import LogoSvg from '../../assets/images/logo.svg';

import { Container, LogoutText } from './style';

function Header() {
  return (
    <Container>
      <LogoSvg />

      <LogoutText>Sair</LogoutText>
    </Container>
  );
}

export default Header;
