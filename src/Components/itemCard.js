import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IconButton, Colors, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import img1 from "../res/earring1.jpg";

export default class ItemCard extends React.Component {
  state = { wishListed: false };
  toggleWishList = () => {
    this.setState((prevState) => ({ wishListed: !prevState.wishListed }));
  };
  render() {
    return (
      <Surface style={styles.card}>
        <View style={styles.bestSellerTag}>
          <Text style={{ color: "white", letterSpacing: 1.1, fontSize: 12 }}>
            Best Seller
          </Text>
        </View>
        <View style={styles.imageView}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../res/earring1.jpg")}
          />
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
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.8,
    borderColor: "#eee",
    height: 300,
    padding: 10,
    width: "44.99%",
    margin: 10,
    aspectRatio: 0.58,
    alignItems: "center",
    elevation: 4,
    // margin: 5,
  },
  imageView: {
    marginTop: 40,
    width: "100%",
    height: 150,
  },
  wishListButton: {
    position: "absolute",
    right: 10,
    top: "75%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  pricePane: {
    // borderWidth: 1,
    alignSelf: "flex-start",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",

    // flexDirection: "row",
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
    // borderWidth: 1,
    position: "absolute",
    right: 0,
    top: "5%",
    width: 90,
    height: 25,
    justifyContent: "center",
    backgroundColor: "green",
    paddingLeft: 10,
  },
  itemDescription: {
    marginTop: 10,
    alignSelf: "flex-start",
    fontSize: 17,
    color: "#555",
  },
});
