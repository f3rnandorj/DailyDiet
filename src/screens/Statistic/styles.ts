import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export type ColorStyleProps = "GREEN" | "RED";

type Props = {
  type: ColorStyleProps;
};

type IconProps = {
  colorIcon: ColorStyleProps;
};

export const Container = styled.View`
  flex: 1;
`;

export const Percent = styled(TouchableOpacity)<Props>`
  height: ${RFValue(180)}px;

  width: 100%;
  justify-content: center;
  align-items: center;

  padding: ${RFValue(17)}px;

  background-color: ${({ theme, type }) =>
    type === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: ${RFValue(20)}px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, colorIcon }) => ({
    size: 26,
    color:
      colorIcon === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_LIGHT,
  })
)`
  align-self: flex-start;
`;

export const InfoDetails = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px;

  margin-top: ${RFValue(-15)}px;
  padding: 0 ${RFValue(24)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  padding-top: ${RFValue(33)}px;
  padding-bottom: ${RFValue(23)}px;
`;

export const InRow = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  margin: ${RFValue(0)}px ${RFValue(6)}px;
`;
