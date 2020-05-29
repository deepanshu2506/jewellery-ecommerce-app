import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Header = ({ scene, previous, navigation }) => {
  return (
    <Appbar.Header>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <MaterialCommunityIcons name="menu" size={30} color="white" />
      </TouchableOpacity>
      <Appbar.Content title="Jewellery Store" />
      <Appbar.Action
        icon="magnify"
        onPress={() => {
          navigation.navigate("searchbar-screen");
        }}
      />
      <Appbar.Action
        icon="cart-outline"
        style={{ marginRight: 10 }}
        onPress={() => {
          navigation.navigate("purchase");
        }}
      />
    </Appbar.Header>
  );
};

export default Header;