/**
 * todo:
 * 1. fetch cart from server/ app state
 * 2.  populate the cart
 * 3. calculate total and display accordingly also save to order state
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

export default class cartScreen extends Component {
  _onAddressChange = () =>
    this.props.navigation.navigate("address-selector-screen");
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, borderWidth: 1 }}>
          <AddressCard onChangeClick={this._onAddressChange} />

          <Text style={styles.totalAmount}>
            Total (3 Item): {`  \u20B9 `}44,601.00
          </Text>

          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>

        {/* Bottom strip starts */}
        <Surface style={styles.priceView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{"\u20B9"}44,601</Text>
            <Text style={styles.paysecurely}>pay Securely</Text>
          </View>
          <Button
            mode="contained"
            icon="lock"
            labelStyle={{ color: "white" }}
            color={secondaryColor}
            onPress={() => {
              this.props.navigation.navigate("payment-selector-screen");
            }}
          >
            BUY NOW
          </Button>
        </Surface>
        {/* Bottom Strip ends */}
      </View>
    );
  }
}

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
