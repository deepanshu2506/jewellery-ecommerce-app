import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Header = ({ scene, previous, navigation }) => {
  return (
    <Appbar.Header style={{ backgroundColor: "#ffa600" }}>
      <TouchableOpacity
        onPress={() => {
          console.log(navigation);
          navigation.openDrawer();
        }}
      >
        <MaterialCommunityIcons name="menu" size={30} />
      </TouchableOpacity>
      <Appbar.Content title="Jewellery Store" />
      <Appbar.Action icon="magnify" style={{ marginRight: 20 }} />
    </Appbar.Header>
  );
};

export default Header;
