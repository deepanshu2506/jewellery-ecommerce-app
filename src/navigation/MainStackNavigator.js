import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import Drawer from "./DrawerNavigator";
import Header from "./CustomSearchAppBar";
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          // header: ({ scene, previous, navigation }) => (
          //   <Header scene={scene} previous={previous} navigation={navigation} />
          // ),
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          screenOptions={{
            header: ({ scene, previous, navigation }) => (
              <Header
                scene={scene}
                previous={previous}
                navigation={navigation}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
