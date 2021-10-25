import { KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import MessageList from '../../components/MessageList';
import SendMessageForm from '../../components/SendMessageForm';
import SignInBox from '../../components/SignInBox';
import { useAuth } from '../../hooks/UseAuth';

import { Container } from './style';

function Home() {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Header />
        <MessageList />
        {user
          ? <SendMessageForm />
          : <SignInBox />}
      </Container>

    </KeyboardAvoidingView>
  );
}

export default Home;
