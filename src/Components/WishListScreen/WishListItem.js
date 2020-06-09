import React from "react";
import { Surface, Button } from "react-native-paper";
import { View, Text, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { secondaryColor } from "../../appStyles";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";
import { addItemToCart } from "../../redux/actions/cartActions";
import { remove } from "../../redux/actions/wishListActions";
import CartButton from "../utility/AddToCartButton";

const WishListItem = ({ item, addItemToCart, removeFromWishList }) => {
  return (
    <Surface
      style={{
        width: "100%",
        flexDirection: "row",
        marginVertical: 10,
      }}
    >
      <View style={{ width: 120, height: 120 }}>
        <Image
          source={{ uri: item.url }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
        <Text style={styles.price}>
          {`\u20b9 ${item.price}/-`}
          <Text style={styles.actualPrice}>
            {`\t \u20b9${item.price + item.price * 0.2}`}
          </Text>
        </Text>
        <View style={styles.bottomPart}>
          <CartButton title="move" item={item} />
          <Button
            mode="outlined"
            style={{ marginLeft: 20 }}
            onPress={() => {
              removeFromWishList(item);
            }}
          >
            remove
          </Button>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  price: { marginTop: 10, fontSize: 18, color: secondaryColor },
  actualPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#999",
    paddingLeft: 10,
  },
  bottomPart: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 5,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => {
    dispatch(addItemToCart(item));
  },
  removeFromWishList: (item) => {
    dispatch(remove(item));
  },
});

export default connect(null, mapDispatchToProps)(WishListItem);
