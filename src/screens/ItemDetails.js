import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";
import { Surface, IconButton, Text, Button } from "react-native-paper";
import { Rating } from "react-native-ratings";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { primaryColor, secondaryColor } from "../appStyles";

import DetailsSwitcher from "../Components/itemDetailsScreen/detailsSwitcher";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import DescriptionView from "../Components/itemDetailsScreen/DescriptionView";
import CartButton from "../Components/utility/AddToCartButton";

const screenWidth = Math.round(Dimensions.get("window").width);
const { width } = Dimensions.get("window");

const toCurrencyString = (number) => {
  return `\u20B9 ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};
export default class ItemDetailsScreen extends React.Component {
  state = { imageViewerVisible: false };

  scale = new Animated.Value(1);

  onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: this.scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  render() {
    const item = this.props?.route.params.item;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("abcd");
            }}
          >
            <Surface style={styles.carouselContainer}>
              <View
                style={{
                  height: "100%",
                  width: screenWidth,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PinchGestureHandler
                  onGestureEvent={this.onZoomEvent}
                  onHandlerStateChange={this.onZoomStateChange}
                >
                  <Animated.Image
                    source={{ uri: item.url }}
                    style={{
                      width: width,
                      height: 300,
                      transform: [{ scale: this.scale }],
                    }}
                    resizeMode="contain"
                  />
                </PinchGestureHandler>
                {/* <Image source={img} /> */}
              </View>
            </Surface>
          </TouchableWithoutFeedback>
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
          <Text style={styles.productTitle}>{item.title}</Text>
          <DescriptionView description={item.description} />
          <DetailsSwitcher item={item} />
        </ScrollView>
        <Surface style={styles.priceView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{toCurrencyString(item.price)}</Text>
            <Text style={styles.actualPrice}>
              {toCurrencyString(item.price + 0.2 * item.price)}
            </Text>
          </View>
          <CartButton item={item} />
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
  carouselContainer: {
    // borderWidth: 1,
    elevation: 2,
    height: 350,
    alignItems: "center",
  },
  price: { fontSize: 25, color: "white" },
  actualPrice: {
    color: "#eee",
    textDecorationLine: "line-through",
    alignSelf: "flex-end",

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
