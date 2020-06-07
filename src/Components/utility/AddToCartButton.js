import React from "react";
import { Button } from "react-native-paper";
import { secondaryColor } from "../../appStyles";
import { addItemToCart } from "../../redux/actions/cartActions";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";
import { View } from "react-native";
import { connect } from "react-redux";

const addToCart = ({ addToCart, item, title }) => {
  return (
    <Button
      mode="contained"
      labelStyle={{ color: "white" }}
      color={secondaryColor}
      onPress={() => {
        addToCart(item);
      }}
      icon={({ size, color }) => (
        <View style={{ width: size + 5 }}>
          <Icons name="cart" size={size + 5} color="white" />
        </View>
      )}
    >
      {title || "add to cart"}
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => {
    dispatch(addItemToCart(data));
  },
});

export default connect(null, mapDispatchToProps)(addToCart);
