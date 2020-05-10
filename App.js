import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { primaryColor, secondaryColor } from "./src/appStyles";

import MainStackNavigator from "./src/navigation/MainStackNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    accent: secondaryColor,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainStackNavigator />
    </PaperProvider>
  );
}
