import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  padding: ${RFValue(24)}px;
`;

export const BoxLeft = styled.View`
  flex: 1;
  margin-right: ${RFValue(5)}px;
`;

export const BoxRight = styled.View`
  flex: 1;
  margin-left: ${RFValue(5)}px;
`;

export const DateTime = styled.View`
  flex-direction: row;
  width: 100%;
`;
