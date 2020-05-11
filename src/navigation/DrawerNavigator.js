import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import DrawerComponent from "../Components/navigation-custom-components/customDrawerComponent";

import SearchResultsNavigator from "./searchResultsNavigator";
import DetailScreen from "../screens/details";

const Drawer = createDrawerNavigator();
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      //   drawerType="permanent"
      drawerContent={DrawerComponent}
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="HomeStack" component={SearchResultsNavigator} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
}
