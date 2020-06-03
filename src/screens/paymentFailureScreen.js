import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import image from "../res/failure.png";
import { primaryColor, secondaryColor } from "../appStyles";
import { Button } from "react-native-paper";

const screenWidth = Dimensions.get("window").width;

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{ width: screenWidth * 0.8, height: 300 }}>
        <Image source={image} style={{ width: "100%", height: "100%" }} />
      </View>
      <Text style={{ color: primaryColor, fontSize: 25, marginTop: 30 }}>
        Order Cancelled
      </Text>
      <Text>Something went wrong!! Try again later</Text>
      <Button
        mode="contained"
        color={secondaryColor}
        labelStyle={{ color: "white" }}
        style={{ marginTop: 20 }}
        onPress={() => {
          navigation.navigate("Drawer");
        }}
      >
        GO TO HOME
      </Button>
    </View>
  );
};
