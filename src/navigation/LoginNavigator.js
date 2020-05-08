import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginIntroScreen from "../screens/loginIntroScreen";

const Stack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="login-start"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login-start" component={LoginIntroScreen} />
    </Stack.Navigator>
  );
}

export default LoginStackNavigator;
