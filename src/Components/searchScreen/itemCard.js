/**
 * todo:
 * 1. accept a boolean flag for bestseller tag
 * 2. accept the image , name,prices from props
 * 3. handle logic to save the item if wishlisted and remove it (in redux)
 *
 * bugs:
 * 1. click on the heart icon results in a navigation to item details screen
 */

import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
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
  state = { wishListed: this.props.isWishListed };

  toggleWishList = () => {
    if (!this.state.wishListed) {
      this.props.addToWishList(this.props.data);
    } else {
      this.props.removeFromWishList(this.props.data);
    }
    this.setState((prevState) => ({ wishListed: !prevState.wishListed }));
  };
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
                <Text style={styles.originalPrice}>{`\u20B9 ${
                  this.props.data.price + 0.2 * this.props.data.price
                }/-`}</Text>
              </View>
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
    top: "5%",
    width: 90,
    height: 25,
    justifyContent: "center",
    backgroundColor: secondaryColor,
    paddingLeft: 10,
  },
  itemDescription: {
    marginTop: 5,
    alignSelf: "flex-start",
    fontSize: 17,
    color: "#555",
    marginBottom: 10,
  },
});
