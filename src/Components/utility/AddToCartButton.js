import React from "react";
import { Button } from "react-native-paper";
import { secondaryColor } from "../../appStyles";
import { addItemToCart } from "../../redux/actions/cartActions";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";
import { View, ToastAndroid } from "react-native";
import { connect } from "react-redux";
import { remove } from "../../redux/actions/wishListActions";

const addToCart = ({
  addToCart,
  removeFromWishList,
  item,
  title,
  inWishList = false,
  selectedSize,
}) => {
  const _onPress = () => {
    addToCart(item, selectedSize);
    if (inWishList) {
      removeFromWishList(item);
    }
    ToastAndroid.showWithGravity(
      "successfully added item to cart! ",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };
  return (
    <Button
      mode="contained"
      labelStyle={{ color: "white" }}
      color={secondaryColor}
      onPress={_onPress}
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
  addToCart: (data, selectedSize) => {
    dispatch(addItemToCart(data, selectedSize));
  },
  removeFromWishList: (item) => {
    dispatch(remove(item));
  },
});

export default connect(null, mapDispatchToProps)(addToCart);
