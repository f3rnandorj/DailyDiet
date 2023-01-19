import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export type InputTypeProps = "SIMPLE" | "DESCRIPTION" | "TIME-HOUR";

type Props = {
  type: InputTypeProps;
};

export const Container = styled.View`
  padding-bottom: ${RFValue(24)}px;
  justify-content: flex-start;
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
      min-height: ${RFValue(45)}px;
      max-height: ${RFValue(45)}px;
    `}
    ${type === "DESCRIPTION" &&
    css`
      min-height: ${RFValue(115)}px;
      max-height: ${RFValue(115)}px;
    `}
    ${type === "TIME-HOUR" &&
    css`
      min-height: ${RFValue(45)}px;
      max-height: ${RFValue(45)}px;
      padding-right: 40%;
    `}
  `}
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;
