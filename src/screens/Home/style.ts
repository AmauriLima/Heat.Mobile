import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.black.medium};
  padding-top: ${`${getStatusBarHeight() + 16}px`} ;
`;
