import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from './utils/api';

export interface User {
  id: string,
  avatar_url: string,
  name: string,
  login: string,
}

interface IAuthResponse {
  data: {
    token: string,
    user: User
  }
}

const USER_STORAGE = '@dowhile:user';
const TOKEN_STORAGE = '@dowhile:token';

class AuthService {
  async signIn(githubCode: string | undefined) {
    const { data } = await api.post('auth/authenticate', {
      code: githubCode,
    }) as IAuthResponse;

    const { user, token } = data;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
    await AsyncStorage.setItem(TOKEN_STORAGE, token);

    return data;
  }

  async signOut() {
    await AsyncStorage.removeItem(USER_STORAGE);
    await AsyncStorage.removeItem(TOKEN_STORAGE);
  }

  async refreshToken(): Promise<User | undefined> {
    const userStorage = await AsyncStorage.getItem(USER_STORAGE);
    const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);

    if (userStorage && tokenStorage) {
      api.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
      const json = await JSON.parse(userStorage);
      return json;
    }
  }
}

export default new AuthService();
