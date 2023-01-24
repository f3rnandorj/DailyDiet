import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${RFValue(50)}px;

  border-radius: 6px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons)``;

export const LoadIndicator = styled.ActivityIndicator``;
