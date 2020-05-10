import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import cartScreen from "../screens/cartScreen";
import AddressSelectorScreen from "../screens/addressSelectorScreen";

import Header from "./purchaseCustomHeader";

const Stack = createStackNavigator();

function PurchaseStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="cart-screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      <Stack.Screen
        name="cart-screen"
        options={{ headerTitle: "My Cart" }}
        component={cartScreen}
      />
      <Stack.Screen
        name="address-selector-screen"
        options={{ headerTitle: "Select Delivery Address" }}
        component={AddressSelectorScreen}
      />
    </Stack.Navigator>
  );
}

export default PurchaseStackNavigator;
