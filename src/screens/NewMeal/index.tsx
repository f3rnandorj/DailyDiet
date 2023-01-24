import React from "react";
import { Button } from "@components/Button";

import { Container } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Button
        iconName="18mp"
        variant="primary"
        onPress={() => {}}
        title="hello"
      />
      <Button variant="outline" onPress={() => {}} title="hello" />
      <Button
        isLoading
        disabled
        variant="primary"
        onPress={() => {}}
        title="hello"
      />
      <Button
        isLoading
        disabled
        variant="outline"
        onPress={() => {}}
        title="hello"
      />
      <Button disabled variant="primary" onPress={() => {}} title="hello" />
      <Button disabled variant="outline" onPress={() => {}} title="hello" />
    </Container>
  );
}
