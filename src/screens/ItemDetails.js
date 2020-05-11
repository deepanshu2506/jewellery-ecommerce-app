/**
 * in progress extend UI
 *
 * todo:
 * 1. pass the product details and the price breakup as props to details switcher
 *
 *
 *
 */

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Surface, IconButton, DataTable } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { primaryColor, secondaryColor } from "../appStyles";

import Carousel from "../Components/itemDetailsScreen/imageCarousel";
import DetailsSwitcher from "../Components/itemDetailsScreen/detailsSwitcher";

const screenWidth = Math.round(Dimensions.get("window").width);

const carouselItems = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];
export default class ItemDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <Carousel carouselItems={carouselItems} />
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>User Ratings</Text>
            <Rating
              type={"custom"}
              showRating={false}
              readonly
              ratingColor={secondaryColor}
              imageSize={20}
              style={{ width: 120, height: 30, marginTop: 10 }}
            />
            <View
              style={{
                //   borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <IconButton icon="share" color={primaryColor} />
              <IconButton icon="heart-outline" color={primaryColor} />
            </View>
          </View>
          <Text style={styles.productTitle}>Amber Cut Drop Earrings</Text>

          <DetailsSwitcher />
        </ScrollView>
        <Surface style={styles.priceView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{"\u20B9"}15,000</Text>
            <Text style={styles.actualPrice}>{"\u20B9"}18,564</Text>
          </View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#000000")}
          >
            <Surface style={styles.addToCartButton}>
              <Icons name="cart" color="white" size={24} />
              <Text
                style={{
                  color: "white",
                  marginLeft: 10,
                  fontSize: 15,
                }}
              >
                Add To Cart
              </Text>
            </Surface>
          </TouchableNativeFeedback>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productTitle: { fontSize: 24, paddingLeft: 10, color: "#011627" },
  priceView: {
    paddingLeft: 30,
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: primaryColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 10,
  },
  price: { fontSize: 25, color: "white" },
  actualPrice: {
    color: "#eee",
    textDecorationLine: "line-through",
    alignSelf: "flex-end",
    // marginBottom: 5,
    marginLeft: 5,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: secondaryColor,
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 10,
  },
  card: {
    width: screenWidth,
  },
  descriptionSwitcherHeader: {
    width: screenWidth / 2,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#bbb",
  },
  tableHeaders: { justifyContent: "center" },
});
