import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  margin-bottom: ${RFValue(33)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(82)}px;
  height: ${RFValue(37)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(50)}px;
`;
