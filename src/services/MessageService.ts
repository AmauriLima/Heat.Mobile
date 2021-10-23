import { IMessageProps } from '../components/Message';
import { api } from './utils/api';

class MessageService {
  async fetchMessages() {
    const { data } = await api.get<IMessageProps[]>('/message/last3');

    return data;
  }
}

export default new MessageService();
