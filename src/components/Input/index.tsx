import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { Controller, Control, RegisterOptions } from "react-hook-form";

import { Container, BoxInput } from "./styles";
import { variants } from "./variants";

//retirar foco no input
type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  variant?: "line" | "box" | "timeHour";
  style?: TextInputProps["style"];

  name: string;
  control: Control;
  rules?: RegisterOptions;
  keyboardType?: string;
};

export function Input({
  inputRef,
  variant = "line",
  style,
  name,
  control,
  rules,
  keyboardType,
  ...rest
}: Props) {
  const inputVariant = variants[variant];

  const inputStyle = inputVariant.inputBox;

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        rules={rules || {}}
        render={({ field }) => (
          <BoxInput
            value={field.value}
            keyboardType={keyboardType}
            onChangeText={field.onChange}
            style={[inputStyle.inputSize, style]}
            multiline={true}
            ref={inputRef}
            {...rest}
          />
        )}
      />
    </Container>
  );
}
