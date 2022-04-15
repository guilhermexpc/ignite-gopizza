import { isLoaded } from 'expo-font';
import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Load, TypeProps } from './styles';

type Props = RectButtonProps & {
  tittle: string;
  type?: TypeProps;
  isLoading?: boolean;
};

export function Button({tittle, type='primary', isLoading=false, ...rest}:Props){
  return (
    <Container type={type} enable={!isLoaded} {...rest}>
      {isLoading ? <Load/ > : <Title>{tittle}</Title>}
    </Container>
  )
}

