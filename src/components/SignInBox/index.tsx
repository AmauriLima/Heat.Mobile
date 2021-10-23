import React from 'react';
import theme from '../../assets/styles/themes/default';
import { useAuth } from '../../hooks/UseAuth';

import Button from '../Button';

import { Container } from './style';

function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={theme.colors.black.dark}
        backgroundColor={theme.colors.yellow}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </Container>
  );
}

export default SignInBox;
