import React from "react";

import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Divider, Checkbox, Button } from "react-native-paper";

import { primaryColor, secondaryColor } from "../appStyles";
import FilterCategoryOptions from "../Components/filterScreen/FilterCategoryOptions";

const screenWidth = Dimensions.get("screen").width;

export default class FilterScreen extends React.Component {
  filters = {
    gender: ["male", "female", "unisex"],
    material: ["gold", "diamond", "white gold"],
    price: [
      "less than 10000",
      "10000 to 20000",
      "20000-300000",
      "more than 30000",
    ],
  };

  constructor(props) {
    super(props);
    this.state = { filters: {} };
    if (!props.route?.params?.filters) {
      Object.keys(this.filters).forEach((key) => {
        this.filters[key].forEach((item) => {
          this.state.filters[key] = this.state.filters[key]
            ? [...this.state.filters[key], { [item]: false }]
            : [{ [item]: false }];
        });
      });
    } else {
      this.state.filters = props?.route?.params?.filters;
    }
    this.state.currentCategory = Object.keys(this.filters)[0];
  }
  handleFilterToggle = (category) => (filter) => {
    this.setState((prevState) => {
      const filterObj = prevState.filters[category].find((f) => {
        return Object.keys(f)[0] == filter;
      });
      filterObj[filter] = !filterObj[filter];
      return prevState;
    });
  };
  applyFilters = () => {
    this.props.navigation.navigate("search", {
      filters: this.state.filters,
    });
  };

  clearFilters = () => {
    this.setState({ filters: {} }, this.applyFilters);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 40,
            justifyContent: "center",
            paddingLeft: 30,
            backgroundColor: "#F0E8D9",
          }}
        >
          <Text style={{ fontSize: 18, color: "#666" }}>Select Filters</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <ScrollView
            style={{
              width: "30%",
              backgroundColor: secondaryColor,
              paddingTop: 10,
            }}
          >
            {Object.keys(this.filters).map((category, index) => (
              <View key={index}>
                <TouchableWithoutFeedback>
                  <Text
                    style={[
                      styles.filterCategories,
                      category == this.state.currentCategory &&
                        styles.activeCategory,
                    ]}
                    onPress={() => this.setState({ currentCategory: category })}
                  >
                    {category}
                  </Text>
                </TouchableWithoutFeedback>
                <Divider
                  style={{ backgroundColor: "#000000", marginVertical: 5 }}
                />
              </View>
              //
            ))}
          </ScrollView>

          <FilterCategoryOptions
            onPropChange={this.handleFilterToggle(this.state.currentCategory)}
            categories={this.state.filters[this.state.currentCategory]?.reduce(
              (obj, item) => {
                return obj ? { ...obj, ...item } : {};
              },
              {}
            )}
          />
        </View>
        <View
          style={{
            height: 45,
            backgroundColor: primaryColor,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button
            color={secondaryColor}
            mode="contained"
            labelStyle={{ color: "white" }}
            onPress={this.clearFilters}
          >
            clear filters
          </Button>
          <Button
            color={secondaryColor}
            mode="contained"
            labelStyle={{ color: "white" }}
            onPress={this.applyFilters}
          >
            apply Filters
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterCategories: {
    // borderWidth: 1,
    paddingVertical: 5,
    fontSize: 20,
    color: "white",
    paddingLeft: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeCategory: { backgroundColor: "white", color: secondaryColor },
  filterCheckboxView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: 10,
  },
});
