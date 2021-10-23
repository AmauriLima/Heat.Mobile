import React, { useEffect, useState } from 'react';
import MessageService from '../../services/MessageService';
import Message, { IMessageProps } from '../Message';

import { styles, Container } from './style';

export default function MessageList() {
  const [currentMessages, setCurrentMessage] = useState<IMessageProps[]>();

  useEffect(() => {
    (async () => {
      const messages = await MessageService.fetchMessages();
      setCurrentMessage(messages);
    })();
  }, []);

  return (
    <Container
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages?.map((message) => (
        <Message key={message.id} id={message.id} text={message.text} user={message.user} />
      ))}
    </Container>
  );
}
