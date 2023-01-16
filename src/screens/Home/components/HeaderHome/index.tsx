import React from "react";

import logo from "@assets/logo.png";

import { Container, Logo, Avatar } from "./styles";

export function HeaderHome() {
  return (
    <Container>
      <Logo source={logo} />
      <Avatar
        source={{
          uri: "https://avatars.githubusercontent.com/u/108803562?v=4",
        }}
      />
    </Container>
  );
}
