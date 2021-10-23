import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface IButtonContainer {
  backgroundColor: string,
}

interface ITitle {
  color: string,
}

export const ButtonContainer = styled(TouchableOpacity)<IButtonContainer>`
  background: ${({ backgroundColor }) => backgroundColor};
  height: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ITitle>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(AntDesign)`
  margin-right: 16px;
`;
