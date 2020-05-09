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
import { Surface, Portal, Dialog, RadioButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import ItemCard from "../Components/itemCard";
import { secondaryColor } from "../appStyles";

class searchResultsScreen extends React.Component {
  state = {
    sortType: 0,
    sortDialogVisible: false,
  };

  sort = () => {};

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
            onPress={() => this.setState({ sortDialogVisible: true })}
            background={TouchableNativeFeedback.Ripple("#00000")}
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
        <Portal>
          <Dialog
            visible={this.state.sortDialogVisible}
            onDismiss={() => {
              this.setState({ sortDialogVisible: false });
            }}
          >
            <Dialog.Title>Sort</Dialog.Title>
            <Dialog.Content>
              <RadioButton.Group
                onValueChange={(value) => {
                  this.setState(
                    { sortType: value, sortDialogVisible: false },
                    this.sort()
                  );
                }}
                value={this.state.sortType}
              >
                <RadioButton.Item
                  label="popularity"
                  style={styles.sortDialogRadioButtonView}
                  labelStyle={{ marginLeft: 10 }}
                  value="0"
                  status="checked"
                />
                <RadioButton.Item
                  label="Price: low to High"
                  style={styles.sortDialogRadioButtonView}
                  labelStyle={{ marginLeft: 10 }}
                  value={1}
                />
                <RadioButton.Item
                  label="Price: High to Low"
                  style={styles.sortDialogRadioButtonView}
                  value={2}
                  labelStyle={{ marginLeft: 10 }}
                />
              </RadioButton.Group>
            </Dialog.Content>
          </Dialog>
        </Portal>
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
  sortDialogRadioButtonView: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
});

export default searchResultsScreen;
