import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import Constants from "expo-constants";

import { primaryColor, secondaryColor } from "../appStyles";

export default class SearchbarScreen extends React.Component {
  state = { searchText: "" };

  search = () => {
    this.props.navigation.push("search", { search: this.state.searchText });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: Constants.statusBarHeight,
          backgroundColor: "white",
        }}
      >
        <View style={{ backgroundColor: primaryColor }}>
          <Searchbar
            style={{
              margin: 10,
              marginVertical: 20,
              flexDirection: "row",
              flexBasis: 50,
            }}
            placeholder="What are you looking for today ?"
            iconColor={secondaryColor}
            value={this.state.searchText}
            onChangeText={(text) => this.setState({ searchText: text })}
            onSubmitEditing={this.search}
            inputStyle={{
              fontSize: 17,
              paddingLeft: 0,
              marginLeft: 10,
              // borderWidth: 1,
            }}
            clearIcon="trash-can"
          />
        </View>
        <View style={{ flex: 1 }}>{/**show search results */}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
