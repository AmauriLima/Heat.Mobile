import React from 'react';
import { Image } from 'react-native';

import theme from '../../assets/styles/themes/default';

import avatarImg from '../../assets/images/avatar.png';

import { Avatar, LinearGradientBorder } from './style';

type Props = {
  imageUri: string | undefined | '';
  size?: 'small' | 'default';
}

const sizes = {
  small: {
    containerSize: '32px',
    avatarSize: '28px',
  },
  default: {
    containerSize: '48px',
    avatarSize: '42px',
  },
};

const defaultAvatar = Image.resolveAssetSource(avatarImg).uri;

function UserImage({ imageUri, size = 'default' }: Props) {
  return (
    <LinearGradientBorder
      colors={[
        theme.colors.pink,
        theme.colors.yellow,
      ]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      sizes={sizes[size]}
    >
      <Avatar sizes={sizes[size]} source={{ uri: imageUri || defaultAvatar }} />
    </LinearGradientBorder>
  );
}

export default UserImage;
