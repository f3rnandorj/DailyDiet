import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const BoxInput = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align-vertical: top;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: ${RFValue(6)}px;

  padding: ${RFValue(14)}px;
`;
