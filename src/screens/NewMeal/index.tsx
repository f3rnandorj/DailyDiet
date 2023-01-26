import React from "react";
import { Text } from "react-native";

import { FieldValues, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { InputTitleBox } from "@components/InputTitleBox";

import { Container, Form, DateTime, BoxLeft, BoxRight } from "./styles";

const schema = yup
  .object({
    food: yup.string().required(),
    description: yup.string().required(),
    date: yup.number().positive().integer().required(),
    time: yup.number().positive().integer().required(),
  })
  .required();

export function NewMeal() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      <Form>
        <InputTitleBox title="Nome" />
        <Input name="food" control={control} rules={{}} variant="line" />
        {errors.food && <Text>"Nome da comida obrigatorio!"</Text>}

        <InputTitleBox title="Descrição" />
        <Input
          name="description"
          control={control}
          rules={{ required: false }}
          variant="box"
        />

        <DateTime>
          <BoxLeft>
            <InputTitleBox title="Data" />
            <Input
              name="date"
              control={control}
              rules={{}}
              variant="timeHour"
            />
            {errors.date && <Text>"O campo data é obrigatorio!"</Text>}
          </BoxLeft>

          <BoxRight>
            <InputTitleBox title="Hora" />
            <Input
              name="time"
              control={control}
              rules={{}}
              variant="timeHour"
            />
            {errors.time && <Text>"O campo hora é obrigatorio!"</Text>}
          </BoxRight>
        </DateTime>

        <Button
          onPress={handleSubmit(onSubmit)}
          title="Cadastrar refeição"
          style={{ marginTop: 10 }}
        />
      </Form>
    </Container>
  );
}
