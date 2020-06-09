import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Surface, Button } from "react-native-paper";

const maxAddressLength = 40;

const getFormattedAddress = (address) => {
  let addressText = `${address.line1}, ${address.line2}, ${address.line3}, ${address.city}, ${address.state}- ${address.pincode}`;
  if (addressText.length > maxAddressLength) {
    addressText = addressText.substr(0, maxAddressLength - 3) + "...";
  }
  return addressText;
};

const AddressCard = ({ address, onChangeClick, userName }) => {
  return (
    <Surface style={styles.container}>
      <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 17 }}>
          Deliver To <Text style={{ fontWeight: "bold" }}>{userName}</Text>
        </Text>
        <Text>{getFormattedAddress(address)}</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Button
          mode="outlined"
          labelStyle={{ textTransform: "capitalize" }}
          onPress={onChangeClick}
        >
          Change
        </Button>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,

    elevation: 4,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingTop: 15,
  },
});

export default AddressCard;
