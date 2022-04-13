import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, ContainerAlter, TypeProps } from './styles';

type Props = TextInputProps & {
  type?: TypeProps;
}

export function Input({ type = 'primary', ...rest}: Props){
  return(
    <ContainerAlter type={type} {...rest} />
  )
}