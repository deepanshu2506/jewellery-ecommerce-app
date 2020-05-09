import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View } from "react-native";

import CustomAppBar from "./CustomSearchAppBar";

import SearchScreen from "../screens/SearchResults";
import ItemDetailsScreen from "../screens/ItemDetails";
import filterScreen from "../screens/filterScreen";

const Stack = createStackNavigator();

function searchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="search"
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
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="itemDetails" component={ItemDetailsScreen} />
      <Stack.Screen name="filterScreen" component={filterScreen} />
    </Stack.Navigator>
  );
}

export default searchStackNavigator;
