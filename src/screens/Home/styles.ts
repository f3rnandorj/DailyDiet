import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { MaterialIcons } from "@expo/vector-icons";

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export type ColorStyleProps = "GREEN" | "RED";

type Props = {
  type: ColorStyleProps;
};

type IconProps = {
  colorIcon: ColorStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: ${RFValue(24)}px ${RFValue(24)}px 0 ${RFValue(24)}px;
`;

export const Statistic = styled(TouchableOpacity)<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;

  height: ${RFValue(102)}px;
  padding: ${RFValue(13)}px;
  margin-bottom: ${RFValue(40)}px;

  background-color: ${({ theme, type }) =>
    type === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: ${RFValue(8)}px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, colorIcon }) => ({
    size: 26,
    color:
      colorIcon === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_LIGHT,
  })
)`
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

export const List = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    padding-top: ${RFValue(20)}px;
  `}
`;
