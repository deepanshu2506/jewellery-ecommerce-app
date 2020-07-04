import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {} from "react-native-paper";
import { CustomPicker } from "react-native-custom-picker";
import { secondaryColor, primaryColor } from "../../appStyles";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";

export default class CustomDropDown extends Component {
  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings;
    return (
      <View style={styles.container}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={[styles.text, { color: primaryColor, flex: 1 }]}>
                {selectedItem ? getLabel(selectedItem) : defaultText}
              </Text>
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: secondaryColor,
                padding: 10,
              }}
            >
              <Icons name="chevron-down" size={20} color={secondaryColor} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderHeader = () => {
    return (
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderBottomColor: "#eee",
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, color: primaryColor, fontWeight: "bold" }}>
            {this.props.labelField}
          </Text>
          {this.props.contentField && (
            <Text
              style={{
                color: secondaryColor,
                marginRight: 50,
                fontWeight: "bold",
              }}
            >
              {this.props.contentField}
            </Text>
          )}
        </View>
      </View>
    );
  };
  renderOption = (settings) => {
    const { item, getLabel } = settings;
    return (
      <View
        style={{
          paddingVertical: 15,
          paddingLeft: 20,
          paddingHorizontal: 10,
          borderBottomColor: "#eee",
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, color: primaryColor }}>{getLabel(item)}</Text>
          {this.props.contentField && (
            <Text style={{ color: secondaryColor, marginRight: 10 }}>
              {item[this.props.contentField]}
            </Text>
          )}
        </View>
      </View>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CustomPicker
          getLabel={(item) => item[this.props.labelField]}
          placeholder={"Select Size"}
          options={this.props.sizes}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          maxHeight={350}
          headerTemplate={this.renderHeader}
          value={this.props.selectedSize}
          onValueChange={(value) => this.props.onSizeChange(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: secondaryColor,
    borderWidth: 1,
    borderRadius: 10,
    // padding: 15,
    marginHorizontal: 5,
    marginVertical: 10,
  },

  text: {
    fontSize: 16,
  },
});
