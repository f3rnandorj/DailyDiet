import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export type BoxStyleProps = "ONE-GRAY-BOX" | "ONE-COLOR-BOX";
export type BoxColorStyleProps = "GREEN" | "RED" | undefined;

type BoxProps = {
  type: BoxStyleProps;
  color: BoxColorStyleProps;
};

export const BoxColor = styled.View<BoxProps>(
  ({ type, color }) => css`
    ${type === "ONE-GRAY-BOX" &&
    css`
      justify-content: center;
      height: ${RFValue(90)}px;
      width: 100%;

      background-color: ${({ theme }) => theme.COLORS.GRAY_600};

      border-radius: ${RFValue(8)}px;
      margin-bottom: ${RFValue(12)}px;
    `}
    ${type === "ONE-COLOR-BOX" &&
    css`
      justify-content: center;
      height: ${RFValue(107)}px;
      flex: 1;
      border-radius: ${RFValue(8)}px;

      background-color: ${({ theme }) =>
        color === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `}
  `
);
