import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { primaryColor, secondaryColor } from "./src/appStyles";

import MainStackNavigator from "./src/navigation/MainStackNavigator";

import { store, persistor } from "./src/redux/index";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    accent: secondaryColor,
    text: "black",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainStackNavigator />
        </PersistGate>
      </ReduxProvider>
    </PaperProvider>
  );
}
