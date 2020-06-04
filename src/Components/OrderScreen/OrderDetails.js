import React from "react";
import { View } from "react-native";
import { Text, Surface } from "react-native-paper";

import OrderStatusBar from "./OrderStatusBar";

const OrderDetails = (props) => {
  return (
    <Surface style={{ elevation: 4, marginVertical: 10 }}>
      <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16, padding: 10, color: "#555" }}>
          Order ID: <Text style={{ color: "#555" }}>DKFKDFK03409430</Text>
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Order Date:
          <Text style={{ fontWeight: "bold" }}> 03/6/2020</Text>
        </Text>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          payment status: <Text style={{ fontWeight: "bold" }}>Paid</Text>
        </Text>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Delivery Date:{" "}
          <Text style={{ fontWeight: "bold" }}>Not Available</Text>
        </Text>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Tracking Info:{" "}
          <Text style={{ fontWeight: "bold" }}>Not Available</Text>
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <OrderStatusBar status="Packed" />
      </View>
    </Surface>
  );
};

export default OrderDetails;
