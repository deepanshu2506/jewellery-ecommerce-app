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

import { connect } from "react-redux";

import { secondaryColor, primaryColor } from "../appStyles";

import ItemCard from "../Components/searchScreen/itemCard";
import FilterBar from "../Components/searchScreen/FilterBar";
import SortDialog from "../Components/searchScreen/SortDialog";

import { allProductsApi, productByTypeApi } from "../resources/endpoints";
import { FlatList } from "react-native-gesture-handler";

class searchResultsScreen extends React.Component {
  state = {
    sortType: 0,
    sortDialogVisible: false,
    itemsList: [],
  };

  async componentDidMount() {
    let productApi = "";
    const params = this.props.route.params || {};
    console.log(params);
    try {
      if (params.searchType == "keyword") {
        productApi = "";
      } else if (params.searchType == "category") {
        productApi = productByTypeApi(params.search);
      } else {
        productApi = allProductsApi;
      }
      console.log(productApi);
      const response = fetch(productApi, {
        method: "GET",
        headers: { Authorization: this.props.authToken },
      });
      response
        .then((data) => data.json())
        .then((data) => {
          // console.log(data);
          this.setState({ itemsList: data });
        });
    } catch (err) {
      throw err;
    }
  }

  _renderItems = ({ item, index }) => (
    <ItemCard navigation={this.props.navigation} data={item} />
  );

  sort = () => {};

  _openSortDialog = () => this.setState({ sortDialogVisible: true });
  _closeSortDialog = () => this.setState({ sortDialogVisible: false });

  _changeSortType = (value) => this.setState({ sortType: value }, this.sort());

  _openFilters = () => this.props.navigation.navigate("filterScreen");

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>abcdsksd</Text> */}
        <FlatList
          style={styles.cardContainer}
          data={this.state.itemsList}
          renderItem={this._renderItems}
          keyExtractor={(item) => item._id}
          numColumns={2}
        />

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

const mapStateToProps = (state) => ({ authToken: state.user.token });
export default connect(mapStateToProps)(searchResultsScreen);
