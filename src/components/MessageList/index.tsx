import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import MessageService from '../../services/MessageService';
import { api } from '../../services/utils/api';
import Message, { IMessageProps } from '../Message';

// import { MESSAGES_EXAMPLE } from '../../services/messages';

import { styles, Container } from './style';

const messagesQueue: IMessageProps[] = [];
const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

export default function MessageList() {
  const [currentMessages, setCurrentMessage] = useState<IMessageProps[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessage((prevState) => [messagesQueue[0], prevState[0], prevState[1]]);
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
