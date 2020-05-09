import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import Constants from "expo-constants";

import { primaryColor, secondaryColor } from "../appStyles";

export default class SearchbarScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Constants.statusBarHeight,
          backgroundColor: "white",
        }}
      >
        <Searchbar style={{ margin: 10 }} iconColor={primaryColor} />
        <View style={{ flex: 1 }}>{/**show search results */}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
