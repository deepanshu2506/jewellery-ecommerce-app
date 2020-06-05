import React from "react";
import { View } from "react-native";
import { Text, Surface } from "react-native-paper";

import OrderStatusBar from "./OrderStatusBar";

const OrderDetails = ({ order }) => {
  return (
    <Surface style={{ elevation: 4, marginVertical: 10 }}>
      <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16, padding: 10, color: "#555" }}>
          Order ID:{" "}
          <Text style={{ color: "#555" }}>{order._id.toUpperCase()}</Text>
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Order Date:
          <Text style={{ fontWeight: "bold" }}>
            {new Date(order.created_at).toDateString()}
          </Text>
        </Text>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Payment status:{" "}
          <Text style={{ fontWeight: "bold", color: "green" }}>Paid</Text>
        </Text>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Delivery Date:{" "}
          <Text style={{ fontWeight: "bold" }}>
            {order.delivery_date
              ? new Date(order.delivery_date).toDateString()
              : "Not Available"}
          </Text>
        </Text>
        <Text style={{ fontSize: 15, paddingVertical: 5 }}>
          Tracking Info:{" "}
          <Text style={{ fontWeight: "bold" }}>
            {order.tracking_info || "Not Available"}
          </Text>
        </Text>
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        <OrderStatusBar status={order.status} />
      </View>
    </Surface>
  );
};

export default OrderDetails;
