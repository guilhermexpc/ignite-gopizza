import styled, { css } from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../theme/'

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type: TypeProps;
}

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 21px;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) => type === 'primary' ? theme.COLORS.PRIMARY_900 : theme.COLORS.SUCCESS_900};

`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${theme.COLORS.TITLE};
  font-family: ${theme.FONTS.TEXT};
`

export const Load = styled.ActivityIndicator.attrs({
  color: theme.COLORS.TITLE
})``