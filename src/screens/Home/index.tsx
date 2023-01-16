import React from "react";
import { TouchableOpacityProps } from "react-native";

import { HighLight } from "@components/HighLight";
import { HeaderHome } from "./components/HeaderHome";

import { Container, Statistic, Icon, Text } from "./styles";
import { Button } from "@components/Button";

type Props = TouchableOpacityProps & {};

export function Home({}: Props) {
  return (
    <Container>
      <HeaderHome />

      {/* component/modal/reactNavigation */}
      <Statistic type="PRIMARY">
        <Icon />
        <HighLight title="90,86%" subTitle="das refeições dentro da dieta" />
      </Statistic>

      <Text>Refeições</Text>

      <Button
        icon="add"
        title="Nova refeição"
        backGround="DARK"
        color="DARK"
        iconColor="DARK"
        isVisible={false}
      />
    </Container>
  );
}
