/**
 *
 * bugs:
 * 1. click on the heart icon results in a navigation to item details screen
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ToastAndroid,
} from "react-native";
import {
  IconButton,
  Colors,
  Surface,
  TouchableRipple,
} from "react-native-paper";

import CartButton from "../utility/AddToCartButton";
import { secondaryColor } from "../../appStyles";

import { connect } from "react-redux";
import { add, remove } from "../../redux/actions/wishListActions";

const screenWidth = Dimensions.get("window").width;

class ItemCard extends React.Component {
  state = { wishListed: this.props.data.isWishListed };

  toggleWishList = () => {
    if (!this.state.wishListed) {
      ToastAndroid.showWithGravity(
        "Item added to wish list",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      this.props.addToWishList(this.props.data);
    } else {
      this.props.removeFromWishList(this.props.data);
      ToastAndroid.showWithGravity(
        "Item removed from wish list",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
    this.setState((prevState) => ({ wishListed: !prevState.wishListed }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data.isWishListed != prevProps.data.isWishListed) {
      this.setState({ wishListed: this.props.data.isWishListed });
    }
  }
  render() {
    return (
      <View style={{ marginLeft: 6, padding: 0 }}>
        <Surface style={styles.card}>
          <TouchableRipple
            style={{ width: "100%" }}
            onPress={() => {
              this.props.navigation.navigate("itemDetails", {
                item: this.props.data,
              });
            }}
          >
            <View style={{ width: "100%" }}>
              <View style={styles.imageView}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: this.props.data.url }}
                />
              </View>
              <View style={styles.pricePane}>
                <Text style={styles.offerPrice}>
                  {`\u20B9 ${this.props.data.price}/-`}
                </Text>
                <Text style={styles.originalPrice}>
                  {`\u20B9 ${this.props.data.actualPrice}/-`}
                </Text>
              </View>
              {this.props.data.discount > 0 && (
                <View style={styles.bestSellerTag}>
                  <Text style={{ textAlign: "left", color: "white" }}>
                    {`${this.props.data.discount}% off`}
                  </Text>
                </View>
              )}
              <Text style={styles.itemDescription}>
                {this.props.data.title}
              </Text>
            </View>
          </TouchableRipple>
          <IconButton
            style={styles.wishListButton}
            size={20}
            icon={this.state.wishListed ? "cards-heart" : "heart-outline"}
            onPress={this.toggleWishList}
            color={this.state.wishListed ? Colors.red500 : Colors.black}
          />
          <CartButton title="Add To Cart" item={this.props.data} />
        </Surface>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeFromWishList: (item) => {
    dispatch(remove(item));
  },
  addToWishList: (item) => {
    dispatch(add(item));
  },
});
const mapStateToProps = (state) => ({
  wishList: state.wishList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.8,
    borderColor: "#eee",
    padding: 10,
    width: screenWidth / 2 - 10,
    alignItems: "center",
    elevation: 4,
    marginVertical: 5,
  },
  imageView: {
    marginTop: 30,
    width: "80%",
    height: 130,
    alignSelf: "center",
  },
  wishListButton: {
    position: "absolute",
    right: 10,
    top: "5%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pricePane: {
    alignSelf: "flex-start",
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  offerPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  originalPrice: {
    marginLeft: 5,
    fontSize: 14,
    alignSelf: "flex-start",
    color: "#888",
    textDecorationLine: "line-through",
  },
  bestSellerTag: {
    position: "absolute",
    right: 0,
    top: "75%",
    // width: 50,
    // height: 25,

    justifyContent: "center",
    backgroundColor: "green",
    padding: 3,
    paddingHorizontal: 5,
    // paddingLeft: 10,
  },
  itemDescription: {
    marginTop: 5,
    alignSelf: "flex-start",
    fontSize: 17,
    color: "#555",
    marginBottom: 10,
  },
});
