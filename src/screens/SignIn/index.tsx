import React from 'react'
import { Text } from 'react-native';

import { Input } from '@components/input';
import { Button } from '@components/Button';

import { Container, ContainerAlter, Content } from './styles';

export function SignIn(){
  return (
    <ContainerAlter>
      <Content>
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
      </Content>
    </ContainerAlter>
  );
}