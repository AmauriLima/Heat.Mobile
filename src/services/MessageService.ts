import { IMessageProps } from '../components/Message';
import { api } from './utils/api';

class MessageService {
  async fetchMessages() {
    const { data } = await api.get<IMessageProps[]>('/message/last3');

    return data;
  }

  async messageSubmit(messageFormatted: string) {
    await api.post('/message', { message: messageFormatted });
  }
}

export default new MessageService();
