import React from "react";
import { BoxColor, BoxColorStyleProps, BoxStyleProps } from "./styles";

type Props = {
  type: BoxStyleProps;
  color?: BoxColorStyleProps;
  children: React.ReactNode;
};

export function InfoBox({ type, color, children }: Props) {
  return (
    <>
      <BoxColor color={color} type={type}>
        {children}
      </BoxColor>
    </>
  );
}
