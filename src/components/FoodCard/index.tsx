import React from "react";
import {
  Container,
  Hour,
  Title,
  Situation,
  Separator,
  ColorsTypeStyleProps,
} from "./styles";

type Props = {
  time: string;
  title: string;
  type: ColorsTypeStyleProps;
};

export function FoodCard({ time, title, type = "OK" }: Props) {
  return (
    <Container>
      <Hour>{time}</Hour>
      <Separator />
      <Title>{title}</Title>
      <Situation type={type}></Situation>
    </Container>
  );
}
