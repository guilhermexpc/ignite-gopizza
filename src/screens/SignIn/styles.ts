import styled from "styled-components/native";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import theme from '../../theme'

export const Container = styled(LinearGradient).attrs<LinearGradientProps>(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1},
  end: {x: 0.5, y: 0.5 }
}))`
  flex: 1;
  justify-content: center;
`;

export const ContainerAlter = styled(LinearGradient).attrs(
  (): LinearGradientProps =>({
    colors: theme.COLORS.GRADIENT,
    start: { x: 0, y: 1},
    end: {x: 0.5, y: 0.5 }
  })
)`
  flex: 1;
  justify-content: center;
`;



