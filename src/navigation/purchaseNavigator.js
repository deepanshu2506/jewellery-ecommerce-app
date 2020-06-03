import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import cartScreen from "../screens/cartScreen";
import AddressSelectorScreen from "../screens/addressSelectorScreen";
import NewAddressScreen from "../screens/newAddressScreen";
import PaymentFailureScreen from "../screens/paymentFailureScreen";
import paymentSuccessScreen from "../screens/paymentSuccessScreen";

import Header from "../Components/navigation-custom-components/purchaseCustomHeader";
import paymentFailureScreen from "../screens/paymentFailureScreen";

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
      <Stack.Screen
        name="add-new-address-screen"
        options={{ headerTitle: "Add Address" }}
        component={NewAddressScreen}
      />
      <Stack.Screen
        name="payment-success-screen"
        options={{ headerTitle: "" }}
        component={paymentSuccessScreen}
      />
      <Stack.Screen
        name="payment-failure-screen"
        options={{ headerTitle: "" }}
        component={paymentFailureScreen}
      />
    </Stack.Navigator>
  );
}

export default PurchaseStackNavigator;
