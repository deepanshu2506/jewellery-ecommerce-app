/**
 * todo:
 * 1. accept a item as prop and display all details from it
 * 2. implement remove and save to wishlist from props
 *
 */

import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Surface, Button } from "react-native-paper";

import { secondaryColor } from "../../appStyles";

import Img from "../../res/loginIntroArt.png";

const Card = (props) => (
  <Surface style={styles.container}>
    <View style={{ flexDirection: "row" }}>
      <View style={styles.topPart}>
        <View style={styles.imageView}>
          <Image source={Img} style={styles.img} />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={{ fontSize: 17 }}>Mens Cluster Ring</Text>
        <Text style={styles.itemId}>KJKJ33-JFMR54</Text>
        <Text>Size : 12</Text>
        <Text>Quantity : 1</Text>
        <Text style={styles.price}>
          {`\u20b9`}14,867
          <Text style={styles.actualPrice}>{`\t \u20b9`}17,367</Text>
        </Text>
      </View>
    </View>
    <View style={styles.bottomPart}>
      <Button mode="outlined" color={secondaryColor} style={{ width: "35%" }}>
        Remove
      </Button>
      <Button mode="outlined" style={{ width: "45%" }}>
        Save to wishlist
      </Button>
    </View>
  </Surface>
);

const styles = StyleSheet.create({
  container: {
    color: "white",
    alignSelf: "flex-end",
    marginLeft: 10,
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
  itemId: { fontSize: 12, color: "#999", marginBottom: 10 },
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

export default Card;