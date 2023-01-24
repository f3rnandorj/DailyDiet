import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, Icon, LoadIndicator } from "./styles";
import { variants } from "./variants";

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "outline";
  style?: TouchableOpacityProps["style"];
};

export function Button({
  onPress,
  title,
  isLoading,
  iconName,
  disabled,
  variant = "primary",
  style,
  ...rest
}: Props) {
  const buttonVariant = variants[variant];

  const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;

  return (
    <Container
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[buttonStyle.button, style]}
      {...rest}
    >
      {isLoading ? (
        <LoadIndicator color={buttonStyle.icon.color} />
      ) : (
        <>
          {iconName && (
            <Icon
              style={{ marginRight: 12 }}
              name={iconName}
              size={24}
              color={buttonStyle.icon.color}
            />
          )}
          <Title style={[{ color: buttonStyle.title.color }]}>{title}</Title>
        </>
      )}
    </Container>
  );
}
