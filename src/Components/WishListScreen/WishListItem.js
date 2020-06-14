import React from "react";
import { Surface, Button, TouchableRipple } from "react-native-paper";
import { View, Text, Image, StyleSheet, Alert, Animated } from "react-native";
import { connect } from "react-redux";
import { secondaryColor } from "../../appStyles";
import { addItemToCart } from "../../redux/actions/cartActions";
import { remove } from "../../redux/actions/wishListActions";
import CartButton from "../utility/AddToCartButton";
import { useNavigation } from "@react-navigation/native";

class WishListItem extends React.Component {
  _openItem = () => {
    this.props.navigation.navigate("itemDetails", {
      item: this.props.item,
    });
  };

  _animated = new Animated.Value(1);

  render() {
    const { item, removeFromWishList } = this.props;
    return (
      <TouchableRipple onPress={this._openItem}>
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
              <CartButton title="move" item={item} inWishList={true} />
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
      </TouchableRipple>
    );
  }
}

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

const WishListItemNavigated = (props) => {
  const navigation = useNavigation();
  return <WishListItem {...props} navigation={navigation} />;
};
export default connect(null, mapDispatchToProps)(WishListItemNavigated);
