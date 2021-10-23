import React from 'react';
import theme from '../../assets/styles/themes/default';

import Button from '../Button';

import { Container } from './style';

function SignInBox() {
  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={theme.colors.black.dark}
        backgroundColor={theme.colors.yellow}
        icon="github"
      />
    </Container>
  );
}

export default SignInBox;
