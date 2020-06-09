import React, { Component } from "react";
import { View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import OrderDetails from "../Components/OrderScreen/OrderDetails";
import ProductDetails from "../Components/OrderScreen/ProductDetails";
import PaymentDetails from "../Components/OrderScreen/PaymentDetails";
import ShippingDetails from "../Components/OrderScreen/ShippingDetails";
import { getOrderDetailsApi } from "../resources/endpoints";

import Loader from "../Components/utility/LoaderDialog";
import { get } from "../resources/Requests";

class OrderDetailsScreen extends Component {
  state = { orderDetails: { _id: "" }, loading: true, error: false };

  screenProps = this.props.route.params || {};

  async componentDidMount() {
    try {
      const response = await get(getOrderDetailsApi(this.screenProps.orderId));
      if (response.code == 1) {
        this.setState({ orderDetails: response.data, loading: false });
      } else {
        this.setState({ error: true, loading: false });
      }
    } catch (err) {
      console.log(err);
      alert("something went wrong");
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.loading ? (
          <Loader visible={this.state.loading} />
        ) : (
          <ScrollView>
            <OrderDetails order={this.state.orderDetails} />
            <ProductDetails products={this.state.orderDetails.products} />
            <PaymentDetails orderPrice={this.state.orderDetails.order_price} />
            <ShippingDetails order={this.state.orderDetails} />
          </ScrollView>
        )}
      </View>
    );
  }
}

export default OrderDetailsScreen;
