import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import Constants from "expo-constants";

import SearchHistoryComponent from "../Components/utility/SearchHistoryComponent";

import { primaryColor, secondaryColor } from "../appStyles";
import { connect } from "react-redux";
import { newSearch } from "../redux/actions/searchResultsActions";

class SearchbarScreen extends React.Component {
  state = { searchText: "" };

  search = () => {
    this.searchFromHistory(this.state.searchText);
    this.props.addToHistory(this.state.searchText);
  };

  searchFromHistory = (keyword) => {
    this.props.navigation.push("search", { search: keyword });
    this.props.navigation.goBack();
  };

  renderHistoryItem = ({ item }) => (
    <SearchHistoryComponent keyword={item} search={this.searchFromHistory} />
  );

  render() {
    console.log(this.props.searchHistory);
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
            returnKeyLabel="search"
            inputStyle={{
              fontSize: 17,
              paddingLeft: 0,
              marginLeft: 10,
            }}
            clearIcon="trash-can"
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <FlatList
            data={this.props.searchHistory}
            renderItem={this.renderHistoryItem}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ searchHistory: state.searchResults });
const mapDispatchToProps = (dispatch) => ({
  addToHistory: (keyword) => {
    dispatch(newSearch(keyword));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchbarScreen);

const styles = StyleSheet.create({});
