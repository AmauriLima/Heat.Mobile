import React from 'react';
import Message from '../Message';

import { styles, Container } from './style';

export default function MessageList() {
  const message = {
    id: '1',
    text: 'Muito ansioso pelo DoWhile 2021 🔥 🔥 🔥 ',
    user: {
      name: 'Amauri Lima',
      avatar_url: 'https://github.com/AmauriLima.png',
    },
  };

  return (
    <Container
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message message={message} />
    </Container>
  );
}
