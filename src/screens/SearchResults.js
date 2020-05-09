// src/screens/Home.js

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { Constants } from "expo";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Surface } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import ItemCard from "../Components/itemCard";

class searchResultsScreen extends React.Component {
  render() {
    const params = this.props.route.params || {};
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <Text>{params.search || " "}</Text> */}
          <View style={styles.cardContainer}>
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
            <ItemCard navigation={this.props.navigation} />
          </View>
        </ScrollView>
        <Surface style={styles.filterBar}>
          <TouchableNativeFeedback
            onPress={() => console.log("Pressed")}
            background={TouchableNativeFeedback.Ripple("#79B473")}
          >
            <Surface style={styles.bottomBarButtons}>
              <MaterialCommunityIcons
                name="sort-variant"
                size={30}
                color="white"
              />
              <Text style={{ fontSize: 18, marginLeft: 10, color: "white" }}>
                Sort
              </Text>
            </Surface>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => console.log("Pressed")}
            background={TouchableNativeFeedback.Ripple("#79B473")}
          >
            <Surface style={styles.bottomBarButtons}>
              <MaterialCommunityIcons
                name="filter-variant"
                size={30}
                color="white"
              />
              <Text style={{ fontSize: 18, marginLeft: 10, color: "white" }}>
                Filter
              </Text>
            </Surface>
          </TouchableNativeFeedback>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    // marginTop: 30,
  },
  cardContainer: {
    // paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  filterBar: {
    width: "100%",
    height: 60,
    elevation: 10,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",

    // alignItems: "center",
  },
  bottomBarButtons: {
    opacity: 1,
    backgroundColor: "white",
    width: "40%",
    height: "75%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#3F3D56",
    alignItems: "center",
    elevation: 3,
    borderRadius: 5,
    // marginLeft: 25,
  },
});

export default searchResultsScreen;
