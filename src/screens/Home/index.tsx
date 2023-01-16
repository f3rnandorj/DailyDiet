import React from "react";

import { useTheme } from "styled-components/native";
import { HighLight } from "@components/HighLight";
import { HeaderHome } from "./components/HeaderHome";

import { Container, Statistic, Icon, ColorStyleProps } from "./styles";

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <HeaderHome />
      {/* component/modal/reactNavigation */}
      <Statistic type="PRIMARY">
        <Icon />
        <HighLight title="90,86%" subTitle="das refeições dentro da dieta" />
      </Statistic>
    </Container>
  );
}
