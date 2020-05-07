import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import SearchScreen from "../screens/SearchResults";
import itemDetailsScreen from "../screens/ItemDetails";
import CustomAppBar from "./CustomSearchAppBar";
import ItemDetailsScreen from "../screens/ItemDetails";

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
    </Stack.Navigator>
  );
}

export default searchStackNavigator;
