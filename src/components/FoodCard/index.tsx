import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Hour,
  Title,
  Situation,
  Separator,
  ColorsTypeStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  time: string;
  food: string;
  type: ColorsTypeStyleProps;
};

export function FoodCard({ time, food, type = "ON-DIET" }: Props) {
  return (
    <Container>
      <Hour>{time}</Hour>
      <Separator />
      <Title>{food}</Title>
      <Situation type={type}></Situation>
    </Container>
  );
}
