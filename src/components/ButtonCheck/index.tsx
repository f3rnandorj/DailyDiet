import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Title,
  Box,
  Icon,
  Text,
  ColorsButtonTypeStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  title?: string;
  textButton: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  typeBoxColor: ColorsButtonTypeStyleProps;
  color: ColorsButtonTypeStyleProps;
  iconColor: ColorsButtonTypeStyleProps;
  isVisible?: boolean;
};

export function ButtonCheck({
  title,
  textButton,
  icon,
  typeBoxColor,
  iconColor,
  isVisible = true,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Box type={typeBoxColor}>
        <Icon name={icon} type={iconColor} />
        <Text>{textButton}</Text>
      </Box>
    </Container>
  );
}
