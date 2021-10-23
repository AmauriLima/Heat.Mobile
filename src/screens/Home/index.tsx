import React from 'react';

import Header from '../../components/Header';
import MessageList from '../../components/MessageList';
import SignInBox from '../../components/SignInBox';

import { Container } from './style';

function Home() {
  return (
    <Container>
      <Header />
      <MessageList />
      <SignInBox />
    </Container>
  );
}

export default Home;
