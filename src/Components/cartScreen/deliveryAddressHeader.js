/**
 * todo:
 * 1.accept name,address from app state
 * 2.
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Surface, Button } from "react-native-paper";

const AddressCard = (props) => {
  return (
    <Surface style={styles.container}>
      <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 17 }}>
          Deliver To <Text style={{ fontWeight: "bold" }}>Tom Holland</Text>
        </Text>
        <Text> 445 Mount Eden Road, Mount Eden...</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Button
          mode="outlined"
          labelStyle={{ textTransform: "capitalize" }}
          onPress={props.onChangeClick}
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
    // height: 60,
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
