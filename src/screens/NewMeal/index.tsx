import React from "react";

import { Input } from "@components/Input";

import {
  Container,
  Header,
  ButtonReturn,
  Icon,
  Form,
  Title,
  TimeHour,
} from "./styles";

export function NewMeal() {
  return (
    <Container>
      <Header>
        <ButtonReturn>
          <Icon name="arrow-back" colorIcon="GREEN" />
        </ButtonReturn>
        <Title>Nova refeição</Title>
      </Header>

      <Form>
        <Input type="SIMPLE" title="Nome" />
        <Input type="DESCRIPTION" title="Descrição" />

        <TimeHour>
          <Input type="TIME-HOUR" title="Data" />
          <Input type="TIME-HOUR" title="Hora" />
        </TimeHour>
      </Form>
    </Container>
  );
}
