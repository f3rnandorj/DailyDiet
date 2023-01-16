import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type ColorsButtonTypeStyleProps = "DARK" | "LIGHT";

type Props = {
  type: ColorsButtonTypeStyleProps;
  isBorderVisible?: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "LIGHT" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};

  border-radius: 6px;
  border: ${(props) => (props.isBorderVisible ? "1px solid #eeeeee" : null)};

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))``;
