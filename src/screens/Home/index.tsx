import React from "react";

import { HighLight } from "@components/HighLight";
import { HeaderHome } from "./components/HeaderHome";

import { Container, Statistic, Icon, Text } from "./styles";
import { Button } from "@components/Button";

export function Home() {
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
