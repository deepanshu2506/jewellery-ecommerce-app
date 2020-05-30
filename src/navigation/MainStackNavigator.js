import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import Drawer from "./DrawerNavigator";
import Login from "./LoginNavigator";
import SearchBarScreen from "../screens/searchBarScreen";
import Purchase from "./purchaseNavigator";

const Stack = createStackNavigator();

const mapStateToProps = (state) => ({ user: state.user });

function MainStackNavigator({ user }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={!user.token ? "login" : "Drawer"}
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

export default connect(mapStateToProps)(MainStackNavigator);
