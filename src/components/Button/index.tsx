import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, Icon, ColorsButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  backGroundColor: ColorsButtonTypeStyleProps;
  colorText: ColorsButtonTypeStyleProps;
  iconColor?: ColorsButtonTypeStyleProps;
  isVisible?: boolean;
};

export function Button({
  title,
  icon,
  backGroundColor,
  iconColor,
  colorText,
  isVisible,
  ...rest
}: Props) {
  return (
    <Container isBorderVisible={isVisible} type={backGroundColor} {...rest}>
      <Icon name={icon} type={iconColor} />
      <Title type={colorText}>{title}</Title>
    </Container>
  );
}
