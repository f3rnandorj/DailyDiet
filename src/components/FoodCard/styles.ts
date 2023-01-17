import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export type ColorsTypeStyleProps = "OK" | "NOT-OK";

type Props = {
  type: ColorsTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  min-height: ${RFValue(50)}px;
  max-height: ${RFValue(50)}px;
  width: 100%;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  padding: ${RFValue(14)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    height: ${RFValue(14)}px;

    border: 0.5px solid ${theme.COLORS.GRAY_400};

    margin: 0 ${RFValue(12)}px;
  `}
`;

export const Situation = styled.View<Props>`
  height: ${RFValue(14)}px;
  width: ${RFValue(14)}px;

  background-color: ${({ theme, type }) =>
    type === "OK" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  border-radius: 50px;
`;
