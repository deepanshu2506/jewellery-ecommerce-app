import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import HomeScreen from "../screens/Home";
import CustomAppBar from "./CustomSearchAppBar";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <CustomAppBar
            scene={scene}
            previous={previous}
            navigation={navigation}
          />
        ),
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
