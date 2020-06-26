import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Surface, Button, IconButton } from "react-native-paper";

import { secondaryColor } from "../../appStyles";
import { connect } from "react-redux";
import {
  removeFromCart,
  addItemToCart,
  reduceFromCart,
} from "../../redux/actions/cartActions";
import { add } from "../../redux/actions/wishListActions";

const Card = ({ item, removeFromCart, addToWishlist, addToCart, reduce }) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  return (
    <Surface style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.topPart}>
          <View style={styles.imageView}>
            <Image source={{ uri: item.url[0] }} style={styles.img} />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={{ fontSize: 17 }}>{item.title}</Text>
          <Text style={styles.itemId}>
            {item._id.toUpperCase().substring(0, 8)}
          </Text>
          <Text>Size : {item.size}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <IconButton
                icon="minus"
                color="white"
                size={20}
                style={{
                  backgroundColor: secondaryColor,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRadius: 5,
                  padding: 0,
                }}
                onPress={() => {
                  reduce(item, item.size);
                  console.log(item.quantity);

                  forceUpdate();
                }}
              />
            </View>
            <View>
              <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
                {item.quantity}
              </Text>
            </View>
            <View>
              <IconButton
                style={{
                  backgroundColor: secondaryColor,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderRadius: 5,
                  padding: 0,
                }}
                onPress={() => {
                  addToCart(item, item.size);
                  forceUpdate();
                }}
                icon="plus"
                color="white"
                size={20}
              />
            </View>
          </View>

          <Text style={styles.price}>
            {`\u20b9 ${item.price}/-`}

            <Text style={styles.actualPrice}>
              {`\t \u20b9${item.actualPrice}`}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <Button
          mode="outlined"
          color={secondaryColor}
          style={{ width: "35%" }}
          onPress={() => {
            removeFromCart(item._id, item.size);
          }}
        >
          Remove
        </Button>
        <Button
          mode="outlined"
          style={{ width: "45%" }}
          onPress={() => {
            addToWishlist(item);
            removeFromCart(item._id, item.size);
          }}
        >
          Save to wishlist
        </Button>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    alignSelf: "flex-end",
    marginHorizontal: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
  topPart: {
    width: "40%",
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: "80%",
    height: "80%",
    borderWidth: 0.5,
    borderColor: "#bbb",
  },
  img: { width: "100%", height: "100%" },
  detailsContainer: { width: "60%", justifyContent: "center" },
  itemId: { fontSize: 12, color: "#999", marginBottom: 5 },
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
  removeFromCart: (id, size) => {
    dispatch(removeFromCart(id, size));
  },
  addToCart: (item, size) => {
    dispatch(addItemToCart(item, size));
  },
  addToWishlist: (item) => {
    dispatch(add(item));
  },
  reduce: (item, size) => {
    dispatch(reduceFromCart(item, size));
  },
});

export default connect(null, mapDispatchToProps)(Card);
