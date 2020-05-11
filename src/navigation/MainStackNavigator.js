import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Drawer from "./DrawerNavigator";
import Login from "./LoginNavigator";
import SearchBarScreen from "../screens/searchBarScreen";
import Purchase from "./purchaseNavigator";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="purchase" component={Purchase} />
        <Stack.Screen name="searchbar-screen" component={SearchBarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
