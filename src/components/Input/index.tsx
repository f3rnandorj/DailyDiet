import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { useTheme } from "styled-components/native";

import { Container, Title, BoxInput, InputTypeProps } from "./styles";
//retirar foco no input
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  title: string;
  type: InputTypeProps;
};

export function Input({ inputRef, title, type, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Title>{title}</Title>
      <BoxInput
        type={type}
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      ></BoxInput>
    </Container>
  );
}
