import React from 'react';

import Header from '../../components/Header';
import MessageList from '../../components/MessageList';

import { Container } from './style';

function Home() {
  return (
    <Container>
      <Header />
      <MessageList />
    </Container>
  );
}

export default Home;
