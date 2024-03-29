import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import DrawerComponent from "../Components/navigation-custom-components/customDrawerComponent";

import SearchResultsNavigator from "./searchResultsNavigator";
import DetailScreen from "../screens/details";
import { connect } from "react-redux";
import {
  populateCartAndWishList,
  logout as logoutUser,
} from "../redux/actions/userActions";

const Drawer = createDrawerNavigator();
function AppDrawer({ user, token, populate, logout }) {
  React.useEffect(() => {
    populate();
  }, []);
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerComponent {...props} user={user} logout={logout} />
      )}
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="HomeStack" component={SearchResultsNavigator} />
      <Drawer.Screen name="Details" component={DetailScreen} />
    </Drawer.Navigator>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  token: state.user.token,
});
const mapDispatchToProps = (dispatch) => ({
  populate: (id, token) => {
    dispatch(populateCartAndWishList(id, token));
  },
  logout: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
