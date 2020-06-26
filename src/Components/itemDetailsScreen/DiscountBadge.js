import React from "react";
import { View, Text } from "react-native";
import { secondaryColor } from "../../appStyles";

const DiscountBadge = ({ discount }) => {
  return (
    <View
      style={{
        backgroundColor: secondaryColor,
        padding: 5,
        paddingLeft: 10,
        position: "absolute",
        zIndex: 1,
        top: "10%",
        right: 0,
        paddingRight: 30,
      }}
    >
      <Text style={{ fontSize: 17, color: "white" }}>
        {` ${discount}% off`}
      </Text>
    </View>
  );
};
export default DiscountBadge;
