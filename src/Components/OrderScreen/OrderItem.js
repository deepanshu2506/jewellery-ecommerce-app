import React from "react";
import { View } from "react-native";
import { Text, Surface, TouchableRipple } from "react-native-paper";
import { primaryColor } from "../../appStyles";
import { useNavigation } from "@react-navigation/native";

export default ({ item }) => {
  const navigation = useNavigation();
  return (
    <Surface style={{ elevation: 3, borderRadius: 7, marginBottom: 10 }}>
      <TouchableRipple
        style={{ borderRadius: 7 }}
        rippleColor={primaryColor}
        borderless={true}
        onPress={() => {
          navigation.navigate("order-details", { orderId: item._id });
        }}
      >
        <View style={{ padding: 10 }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 5 }}
          >
            Order ID : <Text>{item._id}</Text>
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 17, paddingVertical: 5 }}
          >
            Amount:<Text>{`Rs.${item.order_price}/-`} </Text>
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Total Items: <Text>{item.totalQuantity}</Text>
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Status : <Text style={{ color: "green" }}>{item.status}</Text>
            </Text>
            <Text>{new Date(item.created_at).toDateString()}</Text>
          </View>
        </View>
      </TouchableRipple>
    </Surface>
  );
};
