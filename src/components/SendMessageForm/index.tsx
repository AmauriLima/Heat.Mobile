import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';

import theme from '../../assets/styles/themes/default';
import MessageService from '../../services/MessageService';
import Button from '../Button';

import { Container, Input } from './style';

function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendindMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length) {
      setSendindMessage(true);
      MessageService.messageSubmit(messageFormatted);

      setMessage('');
      Keyboard.dismiss();
      setSendindMessage(false);

      Alert.alert('Mensagem enviada com sucesso!');
    } else {
      Alert.alert('Escreva a mensagem para enviar.');
    }
  }

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
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </Container>
  );
}

export default SendMessageForm;
