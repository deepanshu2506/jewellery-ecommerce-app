import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View } from "react-native";

import CustomAppBar from "../Components/navigation-custom-components/CustomSearchAppBar";

import SearchScreen from "../screens/SearchResults";
import ItemDetailsScreen from "../screens/ItemDetails";
import filterScreen from "../screens/filterScreen";
import WishListScreen from "../screens/wishListScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";

import { connect } from "react-redux";
import OrderDetailsScreen from "../screens/orderDetailsScreen";
import HomePage from "../screens/HomePage";

const Stack = createStackNavigator();

const getCartCount = (cart) => {
  return cart.reduce(function (prev, item) {
    return prev + item.quantity;
  }, 0);
};

function searchStackNavigator({ cartCount }) {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <CustomAppBar
            scene={scene}
            previous={previous}
            navigation={navigation}
            cartCount={cartCount}
          />
        ),
      }}
    >
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="itemDetails" component={ItemDetailsScreen} />
      <Stack.Screen name="filterScreen" component={filterScreen} />
      <Stack.Screen name="wishlist" component={WishListScreen} />
      <Stack.Screen name="orders" component={MyOrdersScreen} />
      <Stack.Screen name="order-details" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => ({ cartCount: getCartCount(state.cart) });

export default connect(mapStateToProps)(searchStackNavigator);
