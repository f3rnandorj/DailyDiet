import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export type ColorsButtonTypeStyleProps = "GREEN" | "RED" | "NOT-SELECTED";

type Props = {
  type: ColorsButtonTypeStyleProps;
};

export const Container = styled.View`
  flex: 1;
`;

export const Box = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  min-height: ${RFValue(50)}px;
  max-height: ${RFValue(50)}px;

  background-color: ${({ theme, type }) =>
    type === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};

  border-radius: 6px;

  ${({ type }) => css`
    ${type === "GREEN" &&
    css`
      border: 1px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
      background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    `}
    ${type === "RED" &&
    css`
      border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};
      background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    `}
    ${type === "NOT-SELECTED" &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    `}
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding: 0 ${RFValue(4)}px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 14,
  color: type === "GREEN" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
