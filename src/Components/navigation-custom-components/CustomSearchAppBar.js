import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Appbar, Badge } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Header = ({ scene, previous, navigation, cartCount }) => {
  console.log(cartCount);
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
        icon={({ size, color }) => (
          <View style={{ width: 25, borderRadius: 0 }}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            />
            {cartCount != 0 && (
              <Badge style={{ position: "absolute", top: -5, right: -10 }}>
                {cartCount}
              </Badge>
            )}
          </View>
        )}
        style={{ width: 50 }}
        onPress={() => {
          navigation.navigate("purchase");
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
