import React from "react";
import { SectionList, TouchableOpacityProps } from "react-native";

import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { HeaderHome } from "@components/HeaderHome";
import { FoodCard } from "@components/FoodCard";

import { Container, Statistic, Icon, Text, List, Title } from "./styles";

import { food } from "../../Mocks";

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

      <List>
        <SectionList
          sections={food}
          keyExtractor={(item) => item.food}
          renderItem={({ item }) => <FoodCard {...item} type="ON-DIET" />}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <Title>{title}</Title>
          )}
        />
      </List>
    </Container>
  );
}
