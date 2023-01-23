import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  height: 56px;
  width: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
