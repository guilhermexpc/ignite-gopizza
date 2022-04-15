import React from 'react'
import { Text } from 'react-native';

import { Input } from '@components/input';
import { Button } from '@components/Button';

import { Container, ContainerAlter } from './styles';

export function SignIn(){
  return (
    <ContainerAlter>
      <Input 
        placeholder='E-mail'
        type='secondary'
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input 
        placeholder='Senha'
        type='secondary'
        secureTextEntry={true}
      />

      <Button
        tittle="Entrar"
        type="secondary"
      />
    </ContainerAlter>
  );
}