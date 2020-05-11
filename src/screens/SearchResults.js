/**
 * todo:
 * 1. fetch products from API
 * 2. render item cards
 * 3. sorting functions
 *
 */

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

import { secondaryColor, primaryColor } from "../appStyles";

import ItemCard from "../Components/searchScreen/itemCard";
import FilterBar from "../Components/searchScreen/FilterBar";
import SortDialog from "../Components/searchScreen/SortDialog";

class searchResultsScreen extends React.Component {
  state = {
    sortType: 0,
    sortDialogVisible: false,
  };

  sort = () => {};

  _openSortDialog = () => this.setState({ sortDialogVisible: true });
  _closeSortDialog = () => this.setState({ sortDialogVisible: false });

  _changeSortType = (value) => this.setState({ sortType: value }, this.sort());

  _openFilters = () => this.props.navigation.navigate("filterScreen");

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

        <FilterBar
          openSortDialog={this._openSortDialog}
          openFiltersScreen={this._openFilters}
        />

        <SortDialog
          onDismiss={this._closeSortDialog}
          visible={this.state.sortDialogVisible}
          onSortSelect={this._changeSortType}
          currentType={this.state.sortType}
          options={["popularity", "Price:Low to high", "Price:High To Low "]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default searchResultsScreen;
