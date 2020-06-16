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
import InvoiceEmail from "../Components/OrderScreen/InvoiceEmail";

class OrderDetailsScreen extends Component {
  state = { orderDetails: { _id: "" }, loading: true, error: false };

  screenProps = this.props.route.params || {};

  async componentDidMount() {
    try {
      const response = await get(getOrderDetailsApi(this.screenProps.orderId));
      this.setState({ orderDetails: response, loading: false });
    } catch (err) {
      console.log(err);
      alert("something went wrong");
      this.setState({ error: true, loading: false });
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
            <InvoiceEmail orderId={this.state.orderDetails._id} />
            <PaymentDetails orderPrice={this.state.orderDetails.order_price} />
            <ShippingDetails order={this.state.orderDetails} />
          </ScrollView>
        )}
      </View>
    );
  }
}

export default OrderDetailsScreen;
