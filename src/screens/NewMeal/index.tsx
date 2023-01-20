import React from "react";

import { Input } from "@components/Input";
import { ButtonCheck } from "@components/ButtonCheck";

import {
  Container,
  Header,
  ButtonReturn,
  Icon,
  Form,
  Title,
  TimeHour,
  ConfirmComponentButton,
} from "./styles";
import { Button } from "@components/Button";

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

        <ConfirmComponentButton>
          <ButtonCheck
            title="Está dentro da dieta?"
            icon="stop-circle"
            iconColor="GREEN"
            color="NOT-SELECTED"
            typeBoxColor="GREEN"
            textButton="Sim"
            style={{ marginRight: 4 }}
          />
          <ButtonCheck
            icon="stop-circle"
            iconColor="RED"
            color="NOT-SELECTED"
            typeBoxColor="NOT-SELECTED"
            textButton="Sim"
            style={{ marginLeft: 4 }}
          />
        </ConfirmComponentButton>

        <Button
          backGroundColor="DARK"
          colorText="DARK"
          title="Cadastrar refeição"
        />
      </Form>
    </Container>
  );
}
