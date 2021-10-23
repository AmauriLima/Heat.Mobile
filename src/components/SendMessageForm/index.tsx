import React, { useState } from 'react';

import theme from '../../assets/styles/themes/default';
import Button from '../Button';

import { Container, Input } from './style';

function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage] = useState(false);

  return (
    <Container>
      <Input
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={theme.colors.gray.dark}
        multiline
        maxLength={140}
        value={message}
        onChangeText={setMessage}
        editable={!sendingMessage}
      />

      <Button
        title="Enviar mensagem"
        backgroundColor={theme.colors.pink}
        color={theme.colors.white}
      />
    </Container>
  );
}

export default SendMessageForm;
