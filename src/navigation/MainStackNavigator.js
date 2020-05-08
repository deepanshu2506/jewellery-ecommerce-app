import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Drawer from "./DrawerNavigator";
import Login from "./LoginNavigator";
import SearchBarScreen from "../screens/searchBarScreen";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          // header: ({ scene, previous, navigation }) => (
          //   <Header scene={scene} previous={previous} navigation={navigation} />
          // ),
          headerShown: false,
        }}
      >
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="searchbar-screen" component={SearchBarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
