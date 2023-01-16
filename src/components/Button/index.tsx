import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, Icon, ColorsButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  backGround: ColorsButtonTypeStyleProps;
  color: ColorsButtonTypeStyleProps;
  iconColor: ColorsButtonTypeStyleProps;
  isVisible: boolean;
};

export function Button({
  title,
  icon,
  backGround,
  iconColor,
  color,
  isVisible,
  ...rest
}: Props) {
  return (
    <Container isBorderVisible={isVisible} type={backGround} {...rest}>
      <Icon name={icon} type={iconColor} />
      <Title type={color}>{title}</Title>
    </Container>
  );
}
