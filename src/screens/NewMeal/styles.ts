import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Header = styled(SafeAreaView)`
  height: ${RFValue(110)}px;
  width: 100%;

  flex-direction: row;

  align-items: center;
`;

export const ButtonReturn = styled(TouchableOpacity)`
  padding-left: ${RFValue(24)}px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 26,
  color: theme.COLORS.GRAY_200,
}))`
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  flex: 1;
  margin-left: ${RFValue(-40)}px;
  text-align: center;
`;

export const Form = styled.View`
  flex: 1;

  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;

  padding: ${RFValue(40)}px ${RFValue(24)}px ${RFValue(24)}px ${RFValue(24)}px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const TimeHour = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ConfirmComponentButton = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
`;
