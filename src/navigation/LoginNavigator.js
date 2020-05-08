import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginIntroScreen from "../screens/loginIntroScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

function LoginStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="login-starts"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login-start" component={LoginIntroScreen} />
      <Stack.Screen name="login-screen" component={LoginScreen} />
      <Stack.Screen name="signup-screen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default LoginStackNavigator;
