import React, { Component } from "react";
import { View, Image } from "react-native";
import { Text, Surface, Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { secondaryColor } from "../appStyles";
import OrderDetails from "../Components/OrderScreen/OrderDetails";
import ProductDetails from "../Components/OrderScreen/ProductDetails";
import PaymentDetails from "../Components/OrderScreen/PaymentDetails";
import ShippingDetails from "../Components/OrderScreen/ShippingDetails";
import { getOrderDetailsApi } from "../resources/endpoints";
import { connect } from "react-redux";
import Loader from "../Components/utility/LoaderDialog";

class OrderDetailsScreen extends Component {
  state = { orderDetails: { _id: "" }, loading: true, error: false };
  screenProps = this.props.route.params || {};
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        Authorization: this.props.authToken,
        "Content-type": "application/json",
      },
    };
    fetch(getOrderDetailsApi(this.screenProps.orderId), options)
      .then((res) => res.json())
      .then((res) => {
        if (res.code == 1) {
          this.setState({ orderDetails: res.data, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
      })
      .catch((err) => console.log(err));
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
const mapStateToProps = (state) => ({
  authToken: state.user.token,
});

export default connect(mapStateToProps)(OrderDetailsScreen);
