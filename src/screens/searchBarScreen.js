import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import Constants from "expo-constants";

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
        <Searchbar style={{ margin: 10 }} />
        <View style={{ flex: 1 }}>{/**show search results */}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
