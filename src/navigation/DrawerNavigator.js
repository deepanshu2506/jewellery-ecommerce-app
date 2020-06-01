import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import DrawerComponent from "../Components/navigation-custom-components/customDrawerComponent";

import SearchResultsNavigator from "./searchResultsNavigator";
import DetailScreen from "../screens/details";
import { connect } from "react-redux";

const Drawer = createDrawerNavigator();
function AppDrawer({ user }) {
  return (
    <Drawer.Navigator
      //   drawerType="permanent"
      drawerContent={(props) => <DrawerComponent {...props} user={user} />}
      // drawerContent={DrawerComponent}
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="HomeStack" component={SearchResultsNavigator} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
}

const mapStateToProps = (state) => ({ user: state.user.user });

export default connect(mapStateToProps)(AppDrawer);
