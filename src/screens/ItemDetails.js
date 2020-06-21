import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
  Alert,
  Share,
} from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { CustomPicker } from "react-native-custom-picker";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { primaryColor, secondaryColor } from "../appStyles";

import DetailsSwitcher from "../Components/itemDetailsScreen/detailsSwitcher";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import DescriptionView from "../Components/itemDetailsScreen/DescriptionView";
import CartButton from "../Components/utility/AddToCartButton";
import { get } from "../resources/Requests";
import { getProductApi, getProductPage } from "../resources/endpoints";
import Loader from "../Components/utility/LoaderDialog";
import SizeDropDown from "../Components/itemDetailsScreen/SizeDropDown";
const screenWidth = Math.round(Dimensions.get("window").width);
const { width } = Dimensions.get("window");

const toCurrencyString = (number) => {
  return `\u20B9 ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};
export default class ItemDetailsScreen extends React.Component {
  state = {
    imageViewerVisible: false,
    loading: true,
    item: {},
    selectedSize: {},
  };

  async componentDidMount() {
    try {
      const item = await get(getProductApi(this.props?.route.params.itemId));
      console.log(item);
      this.setState({ item, loading: false, selectedSize: item.sizes[0] });
    } catch (err) {
      console.log(err);
      Alert("something went wrong");
      this.props.navigation.goBack();
    }
  }

  sizeChange = (sizeObject) => {
    this.setState({ selectedSize: sizeObject });
  };
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

  _shareItem = async () => {
    try {
      const result = await Share.share({
        message: `${this.state.item.title}\n${getProductPage(
          this.state.item._id
        )}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { item } = this.state;

    return this.state.loading ? (
      <Loader visible={this.state.loading} />
    ) : (
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
                {item.discount > 0 && (
                  <View
                    style={{
                      backgroundColor: secondaryColor,
                      padding: 5,
                      paddingLeft: 10,
                      position: "absolute",
                      zIndex: 1,
                      top: "10%",
                      right: 0,
                      paddingRight: 30,
                    }}
                  >
                    <Text style={{ fontSize: 17, color: "white" }}>
                      {` ${item.discount}% off`}
                    </Text>
                  </View>
                )}
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
              <Button icon="share" onPress={this._shareItem}>
                Share
              </Button>
              {/* <IconButton icon="share" color={primaryColor} /> */}
            </View>
          </View>

          <Text style={styles.productTitle}>{item.title}</Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Text style={{ fontSize: 16 }}>Size:</Text>
            <SizeDropDown
              sizes={item.sizes}
              onSizeChange={this.sizeChange}
              selectedSize={this.state.selectedSize}
            />
          </View>
          <DescriptionView description={item.description} />
          <DetailsSwitcher item={item} selectedSize={this.state.selectedSize} />
        </ScrollView>
        <Surface style={styles.priceView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>
              {toCurrencyString(this.state.selectedSize.price)}
            </Text>
            <Text style={styles.actualPrice}>
              {toCurrencyString(this.state.selectedSize.actualPrice)}
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
    paddingLeft: 10,
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
