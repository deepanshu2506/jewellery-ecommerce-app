import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Surface, Button } from "react-native-paper";
import RazorpayCheckout from "react-native-razorpay";

import { secondaryColor, primaryColor } from "../appStyles";

import AddressCard from "../Components/cartScreen/deliveryAddressHeader";
import CartItem from "../Components/cartScreen/cartItemCard";
import EmptyCart from "../Components/cartScreen/emptyCart";
import Loader from "../Components/utility/LoaderDialog";

import { connect } from "react-redux";

import { populateCartAndWishList } from "../redux/actions/userActions";
import { ordersApiUrl } from "../resources/endpoints";
import { RAZORPAY_API_KEY as RazorPayApiKey } from "../../env.json";
import { verifyPayments } from "../resources/payments";
import { post } from "../resources/Requests";

const getFormattedAddress = (address) => {
  let addressText = `${address.line1}, ${address.line2}, ${address.line3}, ${address.city}, ${address.state}- ${address.pincode}`;
  return addressText;
};

class CartScreen extends Component {
  state = { loading: false };
  componentDidMount() {
    this.props.syncCart();
  }
  _onAddressChange = () =>
    this.props.navigation.navigate("address-selector-screen");

  _getTotalItems = () => {
    return this.props.cart.reduce(function (prev, item) {
      return prev + item.quantity;
    }, 0);
  };

  _proceedToPayment = () => {
    console.log(this.props.isAddressPresent);
    if (!this.props.isAddressPresent) {
      this.props.navigation.navigate("add-new-address-screen");
    } else {
      this.payments();
    }
  };

  openCheckout = ({ order_id, amt }) => {
    var options = {
      description: "Your Jewellery purchase at H & M inc.",
      currency: "INR",
      key: RazorPayApiKey,
      amount: amt,
      name: "H&M Inc",
      order_id: order_id,
      prefill: {
        email: this.props.user.username,
        contact: this.props.user.mobile,
      },
      theme: { color: "#53a20e" },
    };
    RazorpayCheckout.open(options)
      .then(async (data) => {
        this.props.syncCart();
        this.setState({ loading: true });
        const response = await verifyPayments(data);
        this.setState({ loading: false });
        if (response.successful) {
          this.props.navigation.navigate("payment-success-screen");
        } else {
          this.props.navigation.navigate("payment-failure-screen");
        }
      })
      .catch((error) => {
        this.props.navigation.navigate("payment-failure-screen");
      });
  };

  payments = async () => {
    const body = {
      id: this.props.userId,
      city: this.props.currentAddress.city,
      address: getFormattedAddress(this.props.currentAddress),
      state: this.props.currentAddress.state,
      postcode: this.props.currentAddress.pincode,
    };
    console.log(body);
    this.setState({ loading: true });
    try {
      const res = await post(ordersApiUrl, body);

      this.setState({ loading: false });
      console.log(res);
      this.openCheckout(res);
    } catch (err) {
      throw err;
    }
  };

  _hasItems = () => this.props.cart.length != 0;

  _calcTotalAmount = () => {
    let total = 0;
    this.props.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Loader visible={this.state.loading} />
        {this._hasItems() ? (
          <View style={{ flex: 1, backgroundColor: "#eee" }}>
            <ScrollView style={{ borderWidth: 1 }}>
              {this.props.isAddressPresent && (
                <AddressCard
                  userName={this.props.userName}
                  address={this.props.currentAddress}
                  onChangeClick={this._onAddressChange}
                />
              )}

              <Text style={styles.totalAmount}>
                Total ({this._getTotalItems()}):{" "}
                {`  \u20B9 ${this._calcTotalAmount()}/-`}
              </Text>
              {this.props.cart.map((item) => (
                <CartItem item={item} />
              ))}
            </ScrollView>
          </View>
        ) : (
          <EmptyCart />
        )}

        {/* Bottom strip starts */}
        <Surface style={styles.priceView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>
              {`\u20B9 ${this._calcTotalAmount()}/-`}
            </Text>
            <Text style={styles.paysecurely}>pay Securely</Text>
          </View>
          <Button
            disabled={!this._hasItems()}
            mode="contained"
            icon="lock"
            labelStyle={{ color: "white" }}
            color={secondaryColor}
            onPress={this._proceedToPayment}
          >
            BUY NOW
          </Button>
        </Surface>
        {/* Bottom Strip ends */}
      </View>
    );
  }
}

const isAddressPresent = (addresses) => addresses.length != 0;
const mapStateToProps = (state) => ({
  user: state.user.user,
  userName: state.user.user.username,

  userId: state.user.user._id,
  cart: state.cart,
  isAddressPresent: isAddressPresent(state.user.addresses),
  currentAddress: state.user.currentAddress,
});
const mapDispatchToProps = (dispatch) => ({
  syncCart: () => {
    dispatch(populateCartAndWishList());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
  totalAmount: {
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  priceView: {
    paddingLeft: 30,
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: primaryColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 10,
  },
  price: { fontSize: 25, color: "white" },
  actualPrice: {
    color: "#eee",
    textDecorationLine: "line-through",
    alignSelf: "flex-end",
    marginLeft: 5,
  },
  paysecurely: {
    color: "white",
    alignSelf: "flex-end",
    marginLeft: 10,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: secondaryColor,
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 10,
  },
});
