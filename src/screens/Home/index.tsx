import React from "react";
import { SectionList, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { HeaderHome } from "@components/HeaderHome";
import { FoodCard } from "@components/FoodCard";

import { Container, Statistic, Text, List, Title, Icon } from "./styles";

import { food } from "../../Mocks";

export function Home() {
  return (
    <Container>
      <HeaderHome />

      {/* component/modal/reactNavigation */}
      <Statistic type="GREEN">
        <Icon name="call-made" colorIcon="GREEN" />
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
