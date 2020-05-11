import React, { Component } from "react";
import { TouchableNativeFeedback, StyleSheet, Text } from "react-native";
import { Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import { primaryColor } from "../../appStyles";

const FilterBar = (props) => {
  return (
    <Surface style={styles.filterBar}>
      <TouchableNativeFeedback
        onPress={props.openSortDialog}
        background={TouchableNativeFeedback.Ripple("#00000")}
      >
        <Surface style={styles.bottomBarButtons}>
          <MaterialCommunityIcons name="sort-variant" size={30} color="white" />
          <Text style={{ fontSize: 18, marginLeft: 10, color: "white" }}>
            Sort
          </Text>
        </Surface>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={props.openFiltersScreen}
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
  );
};

const styles = StyleSheet.create({
  filterBar: {
    width: "100%",
    height: 60,
    elevation: 10,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  bottomBarButtons: {
    opacity: 1,
    backgroundColor: "white",
    width: "40%",
    height: "75%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: primaryColor,
    alignItems: "center",
    elevation: 3,
    borderRadius: 5,
  },
});

export default FilterBar;
