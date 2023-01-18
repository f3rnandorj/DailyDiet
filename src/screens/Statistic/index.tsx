import React from "react";
import { TouchableOpacityProps } from "react-native";
import { StatusBar } from "expo-status-bar";

import { HighLight } from "@components/HighLight";
import { InfoBox } from "@components/InfoBox";

import { useTheme } from "styled-components/native";
import {
  Container,
  Percent,
  Icon,
  InfoDetails,
  Title,
  InRow,
  Separator,
} from "./styles";

type Props = TouchableOpacityProps & {};

export function Statistic({ ...rest }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container>
      <StatusBar backgroundColor={COLORS.GREEN_LIGHT} />

      <Percent type="PRIMARY" {...rest}>
        <Icon />
        <HighLight title="90,86%" subTitle="das refeições dentro da dieta" />
      </Percent>

      <InfoDetails>
        <Title>Estatísticas gerais</Title>

        <InfoBox type="ONE-GRAY-BOX">
          <HighLight
            title="22"
            subTitle="melhor sequência de pratos dentro da dieta"
          />
        </InfoBox>

        <InfoBox type="ONE-GRAY-BOX">
          <HighLight title="109" subTitle="refeições registradas" />
        </InfoBox>

        <InRow>
          {/* quando o tipo for igual a "ONE-COLOR-BOX" definir uma cor */}
          <InfoBox color="GREEN" type="ONE-COLOR-BOX">
            <HighLight title="109" subTitle="refeições registradas" />
          </InfoBox>

          {/* componente de separação */}
          <Separator />

          {/* quando o tipo for igual a "ONE-COLOR-BOX" definir uma cor */}
          <InfoBox color="RED" type="ONE-COLOR-BOX">
            <HighLight title="109" subTitle="refeições registradas" />
          </InfoBox>
        </InRow>
      </InfoDetails>
    </Container>
  );
}
