import React from "react";
import { Container, LoadIndicator } from "./styles";

type Props = {
  color?: string;
};

export function Loading({ color }: Props) {
  return (
    <Container>
      <LoadIndicator color={color} />
    </Container>
  );
}
