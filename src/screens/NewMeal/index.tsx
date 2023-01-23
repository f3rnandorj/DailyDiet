import React from "react";

import { Input } from "@components/Input";
import { ButtonCheck } from "@components/ButtonCheck";

import {
  Container,
  Header,
  ButtonReturn,
  Form,
  Title,
  TimeHour,
  ConfirmComponentButton,
} from "./styles";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";

export function NewMeal() {
  return (
    <Container>
      <Header>
        <ButtonReturn>
          <ButtonIcon icon="arrow-back" />
        </ButtonReturn>

        <Title>Nova refeição</Title>
      </Header>

      <Form>
        <Input typeBox="SIMPLE" title="Nome" />

        <Input typeBox="DESCRIPTION" title="Descrição" />

        <TimeHour>
          <Input
            whenTypeIsTimeHour="TIME-HOUR"
            typeBox="TIME-HOUR"
            title="Data"
            style={{ marginRight: 10 }}
          />
          <Input
            whenTypeIsTimeHour="TIME-HOUR"
            typeBox="TIME-HOUR"
            title="Hora"
            style={{ marginLeft: 10 }}
          />
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
