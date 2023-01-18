import { StatusBar } from "expo-status-bar";
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { NewMeal } from "@screens/NewMeal";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontLoaded ? <NewMeal /> : <Loading />}
    </ThemeProvider>
  );
}
