import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import DrawerComponent from "./customDrawerComponent";

import HomeScreen from "../screens/Home";
import DetailScreen from "../screens/details";

const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      //   drawerType="permanent"
      drawerContent={DrawerComponent}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
}
