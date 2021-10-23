import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

interface IProps {
  sizes: {
    containerSize: string,
    avatarSize: string,
  }
}

export const Avatar = styled.Image<IProps>`
  width: ${({ sizes }) => sizes.avatarSize};
  height: ${({ sizes }) => sizes.avatarSize};
  border-radius: ${({ sizes }) => sizes.avatarSize};

  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.black.medium};
`;

export const LinearGradientBorder = styled(LinearGradient)<IProps>`
  justify-content: center;
  align-items: center;

  width: ${({ sizes }) => sizes.containerSize};
  height: ${({ sizes }) => sizes.containerSize};
  border-radius: ${({ sizes }) => sizes.containerSize};
`;
