/**
 * todo:
 * 1. fetch products from API
 * 2. render item cards
 * 3. sorting functions
 *
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import { Constants } from "expo";
import _ from "lodash";

import { connect } from "react-redux";

import ItemCard from "../Components/searchScreen/itemCard";
import FilterBar from "../Components/searchScreen/FilterBar";
import SortDialog from "../Components/searchScreen/SortDialog";
import NoItems from "../Components/searchScreen/noItems";

import { allProductsApi, getSearchApi } from "../resources/endpoints";
import { FlatList } from "react-native-gesture-handler";

class searchResultsScreen extends React.Component {
  state = {
    sortType: 0,
    sortDialogVisible: false,
    loading: true,
    itemsList: [],
  };

  async componentDidMount() {
    const params = this.props.route.params || {};
    try {
      const productApi = params.search
        ? getSearchApi(params.search)
        : allProductsApi;
      const response = fetch(productApi, {
        method: "GET",
        headers: { Authorization: this.props.authToken },
      });
      response
        .then((data) => data.json())
        .then((data) => {
          this.setState({ itemsList: data, loading: false });
        });
    } catch (err) {
      throw err;
    }
  }
  _debug = () => {
    console.log(this.props.cart);
  };

  isWishlisted = (item) => {
    const fromList = _.find(this.props.wishList, (i) => i._id == item._id);
    return fromList ? true : false;
  };

  _renderItems = ({ item, index }) => (
    <ItemCard
      navigation={this.props.navigation}
      data={item}
      debug={this._debug}
      isWishListed={this.isWishlisted(item)}
    />
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
        {!this.state.loading && this.state.itemsList.length == 0 ? (
          <NoItems />
        ) : (
          <FlatList
            style={styles.cardContainer}
            data={this.state.itemsList}
            renderItem={this._renderItems}
            keyExtractor={(item) => item._id}
            numColumns={2}
          />
        )}

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

const mapStateToProps = (state) => ({
  authToken: state.user.token,
  cart: state.cart,
  wishList: state.wishList,
});
export default connect(mapStateToProps)(searchResultsScreen);
