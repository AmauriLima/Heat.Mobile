import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ButtonContainer, Icon, Title } from './style';

interface IButtonProps extends TouchableOpacityProps {
  title: string,
  color: string,
  backgroundColor: string,
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isLoading?: boolean
}

function Button({
  title, color, backgroundColor, icon, isLoading = false, ...rest
}: IButtonProps) {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading
        ? <ActivityIndicator color={color} />
        : (
          <>
            <Icon name={icon} size={24} />
            <Title color={color}>
              {title}
            </Title>
          </>
        )}
    </ButtonContainer>
  );
}

export default Button;
