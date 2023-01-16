import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ArrowUpRight } from "phosphor-react-native";

export type ColorStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ColorStyleProps;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin: ${RFValue(24)}px;
`;

export const Statistic = styled(TouchableOpacity)<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;

  height: ${RFValue(102)}px;
  padding: ${RFValue(13)}px;
  margin-bottom: ${RFValue(40)}px;

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

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    padding-bottom: ${RFValue(8)}px;
  `}
`;
