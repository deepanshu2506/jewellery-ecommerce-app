import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text, Surface, Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { secondaryColor } from "../appStyles";
import OrderDetails from "../Components/OrderScreen/OrderDetails";
import ProductDetails from "../Components/OrderScreen/productDetails";
import PaymentDetails from "../Components/OrderScreen/PaymentDetails";
import ShippingDetails from "../Components/OrderScreen/ShippingDetails";

export default class OrderDetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <OrderDetails />
          <ProductDetails />
          <PaymentDetails />
          <ShippingDetails />
        </ScrollView>
      </View>
    );
  }
}
