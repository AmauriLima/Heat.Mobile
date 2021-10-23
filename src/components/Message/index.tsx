import React from 'react';

import UserImage from '../UserImage';

import {
  Container, Footer, MessageText, UserName,
} from './style';

export interface IMessageProps {
  message: {
    id: string,
    text: string,
    user: {
      name: string,
      avatar_url: string,
    }
  }
}

export default function Message({ message }: IMessageProps) {
  return (
    <Container
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
    >
      <MessageText>
        {message.text}
      </MessageText>

      <Footer>
        <UserImage size="small" imageUri={message.user.avatar_url} />

        <UserName>
          {message.user.name}
        </UserName>
      </Footer>
    </Container>
  );
}
