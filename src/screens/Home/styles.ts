import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "src/theme";
import { ArrowUpRight } from "phosphor-react-native";

export type ColorStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ColorStyleProps;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin: ${RFValue(24)}px;
`;

export const Statistic = styled.View<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;

  height: ${RFValue(102)}px;
  padding: ${RFValue(13)}px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: ${RFValue(8)}px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 26,
  color: theme.COLORS.GREEN_DARK,
}))`
  align-self: flex-end;
`;
