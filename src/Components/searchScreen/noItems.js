import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import noItemimage from "../../res/noItems.png";
import { primaryColor } from "../../appStyles";

const screenWidth = Dimensions.get("window").width;

export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: screenWidth,
      }}
    >
      <View style={{ width: screenWidth * 0.8, height: 300 }}>
        <Image source={noItemimage} style={{ width: "100%", height: "100%" }} />
      </View>
      <Text style={{ color: primaryColor, fontSize: 20 }}>No items found</Text>
    </View>
  );
};
