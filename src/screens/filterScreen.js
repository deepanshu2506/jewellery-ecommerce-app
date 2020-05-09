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

const screenWidth = Dimensions.get("screen").width;

export default class FilterScreen extends React.Component {
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
              flexGrow: 2,
              backgroundColor: secondaryColor,
              paddingTop: 10,
            }}
          >
            <TouchableWithoutFeedback>
              <Text style={[styles.filterCategories]}>Price</Text>
            </TouchableWithoutFeedback>
            <Divider
              style={{ backgroundColor: "#000000", marginVertical: 5 }}
            />
            <TouchableWithoutFeedback>
              <Text
                style={[
                  styles.filterCategories,
                  { backgroundColor: "white", color: secondaryColor },
                ]}
              >
                Gender
              </Text>
            </TouchableWithoutFeedback>
            <Divider
              style={{ backgroundColor: "#000000", marginVertical: 5 }}
            />
            <TouchableWithoutFeedback>
              <Text style={styles.filterCategories}>Material</Text>
            </TouchableWithoutFeedback>
            <Divider
              style={{ backgroundColor: "#000000", marginVertical: 5 }}
            />
          </ScrollView>
          <ScrollView style={{ flexGrow: 4, paddingTop: 10 }}>
            <View style={styles.filterCheckboxView}>
              <Checkbox color={secondaryColor} />
              <Text>Male</Text>
            </View>
            <View style={styles.filterCheckboxView}>
              <Checkbox color={secondaryColor} />
              <Text>Female</Text>
            </View>
            <View style={styles.filterCheckboxView}>
              <Checkbox color={secondaryColor} />
              <Text>Unisex</Text>
            </View>
          </ScrollView>
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
  filterCheckboxView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: 10,
  },
});
