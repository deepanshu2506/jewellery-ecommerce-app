import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import DrawerComponent from "../Components/navigation-custom-components/customDrawerComponent";

import SearchResultsNavigator from "./searchResultsNavigator";
import DetailScreen from "../screens/details";
import { connect } from "react-redux";
import { populateCartAndWishList } from "../redux/actions/userActions";

const Drawer = createDrawerNavigator();
function AppDrawer({ user, token, populate }) {
  React.useEffect(() => {
    populate();
  }, []);
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

const mapStateToProps = (state) => ({
  user: state.user.user,
  token: state.user.token,
});
const mapDispatchToProps = (dispatch) => ({
  populate: (id, token) => {
    dispatch(populateCartAndWishList(id, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
