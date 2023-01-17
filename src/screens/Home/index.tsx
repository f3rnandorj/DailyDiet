import React from "react";
import { TouchableOpacityProps } from "react-native";

import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { HeaderHome } from "@components/HeaderHome";
import { FoodCard } from "@components/FoodCard";

import { Container, Statistic, Icon, Text } from "./styles";

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

      <FoodCard time="20:00" title="X-tudo" type="OK" />
    </Container>
  );
}
