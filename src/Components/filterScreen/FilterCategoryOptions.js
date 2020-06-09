import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";

export default class FilterCategoryOptions extends Component {
  render() {
    return (
      <ScrollView style={{ width: "55%", paddingTop: 10 }}>
        {Object.keys(this.props.categories || {}).map((category, index) => (
          <View key={index} style={styles.filterCheckboxView}>
            <Checkbox.Item
              label={category}
              status={this.props.categories[category] ? "checked" : "unchecked"}
              style={{
                flexDirection: "row-reverse",
              }}
              onPress={() => {
                this.props.onPropChange(category);
              }}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  filterCategories: {
    paddingVertical: 5,
    fontSize: 20,
    color: "white",
    paddingLeft: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  filterCheckboxView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
