import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { Container, Title, BoxInput, InputTypeProps } from "./styles";
//retirar foco no input
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  title: string;
  typeBox: InputTypeProps;
  whenTypeIsTimeHour?: InputTypeProps;
};

export function Input({
  inputRef,
  title,
  typeBox,
  whenTypeIsTimeHour = "SIMPLE",
  ...rest
}: Props) {
  return (
    <Container type={whenTypeIsTimeHour}>
      <Title>{title}</Title>
      <BoxInput type={typeBox} ref={inputRef} {...rest} />
    </Container>
  );
}
