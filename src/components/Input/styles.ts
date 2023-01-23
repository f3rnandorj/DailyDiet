import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export type InputTypeProps = "SIMPLE" | "DESCRIPTION" | "TIME-HOUR";

type Props = {
  type: InputTypeProps;
};

export const Container = styled.View<Props>`
  ${({ type }) => css`
    ${type === "TIME-HOUR" &&
    css`
      flex: 1;
    `}
  `}

  margin-bottom: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const BoxInput = styled(TextInput)<Props>`
  ${({ type }) => css`
    ${type === "SIMPLE" &&
    css`
      height: ${RFValue(45)}px;
    `}
    ${type === "DESCRIPTION" &&
    css`
      height: ${RFValue(115)}px;
    `}
    ${type === "TIME-HOUR" &&
    css`
      height: ${RFValue(45)}px;
    `}
  `}
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: ${RFValue(6)}px;
  padding: ${RFValue(14)}px;
`;
