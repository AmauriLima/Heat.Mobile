import { TextInput } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${({ theme }) => theme.colors.black.light};
  padding: 0 24px;
  padding-bottom: ${`${getBottomSpace() + 16}px`};
  padding-top: 16px;
`;

export const Input = styled(TextInput).attrs({
  textAlignVertical: 'top',
})`
  width: 100%;
  height: 88px;
  color: ${({ theme }) => theme.colors.white};
`;
