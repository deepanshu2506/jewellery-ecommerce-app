import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import noItemimage from "../../res/emptyWishList.png";
import { primaryColor } from "../../appStyles";

const screenWidth = Dimensions.get("window").width;

export default () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: screenWidth * 0.5, height: 200 }}>
        <Image
          source={noItemimage}
          style={{ width: "100%", height: "100%", opacity: 0.6 }}
        />
      </View>
      <Text style={{ color: primaryColor, fontSize: 20, marginTop: 30 }}>
        WishList is Empty
      </Text>
    </View>
  );
};
