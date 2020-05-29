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
import { IconButton, Colors, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { primaryColor, secondaryColor } from "../../appStyles";

import img1 from "../../res/earring1.jpg";

const screenWidth = Dimensions.get("window").width;

export default class ItemCard extends React.Component {
  state = { wishListed: false };
  toggleWishList = () => {
    this.setState((prevState) => ({ wishListed: !prevState.wishListed }));
  };
  render() {
    return (
      <TouchableNativeFeedback
        style={{ flex: 1, width: "100%", margin: 5, padding: 0 }}
        onPress={() => {
          this.props.navigation.navigate("itemDetails");
        }}
      >
        <Surface style={styles.card}>
          <View style={styles.bestSellerTag}>
            <Text style={{ color: "white", letterSpacing: 1.1, fontSize: 12 }}>
              Best Seller
            </Text>
          </View>
          <View style={styles.imageView}>
            <Image style={{ width: "100%", height: "100%" }} source={img1} />
          </View>
          <View style={styles.pricePane}>
            <Text style={styles.offerPrice}>{"\u20B9"} 35,000/-</Text>
            <Text style={styles.originalPrice}>{"\u20B9"} 42,000/-</Text>
          </View>

          <IconButton
            style={styles.wishListButton}
            size={20}
            icon={this.state.wishListed ? "cards-heart" : "heart-outline"}
            onPress={this.toggleWishList}
            color={this.state.wishListed ? Colors.red500 : Colors.black}
          />
          <Text style={styles.itemDescription}>Long hanging earring</Text>
        </Surface>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.8,
    borderColor: "#eee",
    padding: 10,
    width: screenWidth / 2 - 10,
    alignItems: "center",
    elevation: 4,
  },
  imageView: {
    marginTop: 30,
    width: "80%",
    height: 130,
  },
  wishListButton: {
    position: "absolute",
    right: 10,
    top: "75%",
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