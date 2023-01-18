import React from "react";

import { Input } from "@components/Input";

import { Container, Header, ButtonReturn, Icon, Form, Text } from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header>
        <ButtonReturn>
          <Icon name="arrow-back" colorIcon="GREEN" />
        </ButtonReturn>
        <Text>oiiiiii</Text>
      </Header>

      <Form>
        <Input />
      </Form>
    </Container>
  );
}
