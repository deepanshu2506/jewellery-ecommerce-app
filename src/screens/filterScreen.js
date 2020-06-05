import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Divider, Checkbox } from "react-native-paper";

import { primaryColor, secondaryColor } from "../appStyles";
import FilterCategoryOptions from "../Components/filterScreen/FilterCategoryOptions";

const screenWidth = Dimensions.get("screen").width;

export default class FilterScreen extends React.Component {
  filters = {
    gender: ["male", "female", "unisex"],
    material: ["gold", "diamond"],
    price: ["less than 10000", "10000 to 20000", "20000-300000"],
  };

  constructor(props) {
    super(props);
    this.state = {};
    Object.keys(this.filters).forEach((key) => {
      this.filters[key].forEach((item) => {
        this.state[key] = this.state[key]
          ? [...this.state[key], { [item]: false }]
          : [{ [item]: false }];
      });
    });
    this.state.currentCategory = Object.keys(this.filters)[0];
  }
  handleFilterToggle = (category) => (filter) => {
    console.log(category, filter, this.state[category][filter]);
    this.setState((prevState) => {
      const filterObj = prevState[category].find((f) => {
        return Object.keys(f)[0] == filter;
      });
      filterObj[filter] = !filterObj[filter];
      return prevState;
    });
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
            categories={this.state[this.state.currentCategory].reduce(
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
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <View style={{ width: 140, marginRight: 20 }}>
            <Button title="Apply" color={secondaryColor} />
          </View>
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
