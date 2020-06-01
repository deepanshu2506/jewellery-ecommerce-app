/**
 * todo:
 * 4. fetch address if available
 * 5. if address not available then navigate to the address selection screen on clicking buy now
 * 6. implement the remove from cart and save to wishlist functions
 * 7. if multiple addresses the select the default address or if default
 *    not available the first address
 */

import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Surface, Button } from "react-native-paper";

import { secondaryColor, primaryColor } from "../appStyles";

import AddressCard from "../Components/cartScreen/deliveryAddressHeader";
import CartItem from "../Components/cartScreen/cartItemCard";
import EmptyCart from "../Components/cartScreen/emptyCart";
import { connect } from "react-redux";

class CartScreen extends Component {
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
      this.props.navigation.navigate("payment-selector-screen");
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
  userName: state.user.user.username,
  cart: state.cart,
  isAddressPresent: isAddressPresent(state.user.addresses),
  currentAddress: state.user.currentAddress,
});

export default connect(mapStateToProps)(CartScreen);

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
