import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const LogoutText = styled.Text`
  font-size: 15;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;
