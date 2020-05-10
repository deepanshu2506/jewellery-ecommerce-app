import React from "react";
import { TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Header = ({ scene, previous, navigation }) => {
  const { headerTitle } = scene.descriptor.options;
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content
        title={headerTitle}
        theme={{ fonts: { medium: "sans-serif" } }}
      />
    </Appbar.Header>
  );
};

export default Header;
