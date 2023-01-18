import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export type ColorStyleProps = "GREEN" | "RED";

type Props = {
  type: ColorStyleProps;
};

type IconProps = TouchableOpacity & {
  colorIcon: ColorStyleProps;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(SafeAreaView)`
  height: ${RFValue(120)}px;
  width: 100%;

  flex-direction: row;

  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const ButtonReturn = styled(TouchableOpacity)`
  padding-left: ${RFValue(24)}px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, colorIcon }) => ({
    size: 26,
    color:
      colorIcon === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_LIGHT,
  })
)``;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  flex: 1;
  margin-left: ${RFValue(-40)}px;
  text-align: center;
`;

export const Form = styled.View``;
