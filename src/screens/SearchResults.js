import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import _ from "lodash";

import ItemCard from "../Components/searchScreen/itemCard";
import FilterBar from "../Components/searchScreen/FilterBar";
import SortDialog from "../Components/searchScreen/SortDialog";
import NoItems from "../Components/searchScreen/noItems";

import Loader from "../Components/utility/LoaderDialog";

import { allProductsApi, getSearchApi } from "../resources/endpoints";
import { get } from "../resources/Requests";

import sortItems, { sortTypes } from "../resources/sortUtil";
import { applyFilters } from "../resources/ApplyFilters";

class searchResultsScreen extends React.Component {
  state = {
    sortType: 0,
    sortDialogVisible: false,
    loading: true,
    itemsList: [],
  };
  sortProperties = {
    nameAsc: "Name: Ascending",
    nameDesc: "Name: Descending",
    priceAsc: "Price:Low to high",
    priceDesc: "Price:High To Low ",
  };

  async componentDidMount() {
    const searchKeyWord =
      this.props.route.params && this.props.route.params.search;
    try {
      const productApi = searchKeyWord
        ? getSearchApi(searchKeyWord)
        : allProductsApi;

      const data = await get(productApi);
      this.setState(
        {
          itemsList: data,
          loading: false,
          sortType: this.sortProperties.nameDesc,
        },
        this.sort(this.sortProperties.nameDesc)
      );
    } catch (err) {
      alert("something went wrong");
    }
  }

  isWishlisted = (item) => {
    const fromList = _.find(this.props.wishList, (i) => i._id == item._id);
    return fromList ? true : false;
  };

  _renderItems = ({ item }) => (
    <ItemCard
      navigation={this.props.navigation}
      data={item}
      debug={this._debug}
      isWishListed={this.isWishlisted(item)}
    />
  );

  sort = (sortType) => {
    let property = "";
    let type = "";
    console.log(sortType, this.sortProperties.priceAsc);
    switch (sortType) {
      case this.sortProperties.nameAsc:
        property = "title";
        type = sortTypes.ASC;
        break;
      case this.sortProperties.nameDesc:
        property = "title";
        type = sortTypes.DESC;
        break;
      case this.sortProperties.priceDesc:
        property = "price";
        type = sortTypes.DESC;
        break;
      case this.sortProperties.priceAsc:
        console.log("abcd");
        property = "price";
        type = sortTypes.ASC;
        console.log("abcd");
        break;
    }
    console.log(property, type);
    this.setState((prevState) => ({
      itemsList: sortItems(prevState.itemsList, property, type),
    }));
  };

  _openSortDialog = () => this.setState({ sortDialogVisible: true });
  _closeSortDialog = () => this.setState({ sortDialogVisible: false });

  _changeSortType = (value) => {
    console.log(value);
    this.setState({ sortType: value }, this.sort(value));
  };

  _openFilters = () =>
    this.props.navigation.navigate("filterScreen", {
      filters: this.props.route?.params?.filters,
    });

  render() {
    return this.state.loading ? (
      <Loader visible={this.state.loading} />
    ) : (
      <View style={styles.container}>
        <FlatList
          style={styles.cardContainer}
          data={applyFilters(
            this.props.route?.params?.filters,
            this.state.itemsList
          )}
          renderItem={this._renderItems}
          keyExtractor={(item) => item._id}
          numColumns={2}
          ListEmptyComponent={() => <NoItems />}
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
          options={this.sortProperties}
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
  wishList: state.wishList,
});
export default connect(mapStateToProps)(searchResultsScreen);
