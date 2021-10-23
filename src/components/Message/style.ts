import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 36px;
`;

export const MessageText = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 16px;
`;
