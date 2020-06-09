import React from "react";
import { Appbar } from "react-native-paper";

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
