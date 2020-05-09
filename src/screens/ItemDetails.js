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
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Rating } from "react-native-ratings";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import img from "../res/earring1.jpg";
import { primaryColor, secondaryColor } from "../appStyles";

const screenWidth = Math.round(Dimensions.get("window").width);
export default class ItemDetailsScreen extends React.Component {
  state = {
    activeIndex: 0,
    swipeCurrentPage: 0,
    carouselItems: [
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
    ],
  };
  _renderItem = ({ item, index }, parallexProps) => {
    return (
      <View style={{ height: "100%" }}>
        <Image source={img} style={{ width: "100%", height: "100%" }} />
      </View>
    );
  };

  snapPage = (event) => {
    if (!event) return;

    const xOffset = event.nativeEvent.contentOffset.x + 10;

    const currentPage = Math.floor(xOffset / screenWidth);
    this.setState(
      (prevState) =>
        currentPage != prevState.swipeCurrentPage && {
          swipeCurrentPage: currentPage,
        }
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "white" }}>
          <Surface style={styles.carouselContainer}>
            <Carousel
              ref={(c) => {
                this._carousel = c;
              }}
              containerCustomStyle={styles.carousel}
              data={this.state.carouselItems}
              renderItem={this._renderItem}
              sliderWidth={300}
              loop={true}
              itemWidth={300}
              onBeforeSnapToItem={(index) =>
                this.setState({ activeIndex: index })
              }
              lockScrollWhileSnapping
              autoplay
              autoplayDelay={1000}
            />
            <Pagination
              dotsLength={this.state.carouselItems.length}
              activeDotIndex={this.state.activeIndex}
              dotStyle={styles.paginationDotStyle}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </Surface>
          <View
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
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
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              //   borderWidth: 1,
              height: 40,
            }}
          >
            <TouchableNativeFeedback
              onPress={() => {
                this.descriptionSwitcher.scrollTo({ x: 0 });
              }}
            >
              <View
                style={[
                  styles.descriptionSwitcherHeader,
                  this.state.swipeCurrentPage == 0 && {
                    borderBottomColor: "#011627",
                  },
                ]}
              >
                <Text>Product Information</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                this.descriptionSwitcher.scrollTo({ x: screenWidth });
              }}
            >
              <View
                style={[
                  styles.descriptionSwitcherHeader,
                  this.state.swipeCurrentPage == 1 && {
                    borderBottomColor: "#011627",
                  },
                ]}
              >
                <Text> Price Breakup</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <ScrollView
            onScroll={this.snapPage}
            decelerationRate={10}
            snapToInterval={screenWidth}
            snapToAlignment={"center"}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={(node) => (this.descriptionSwitcher = node)}
          >
            <View style={styles.card}>
              <DataTable style={{ alignContent: "center" }}>
                <DataTable.Row>
                  <DataTable.Cell>Height</DataTable.Cell>
                  <DataTable.Cell>1.25cm</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Height</DataTable.Cell>
                  <DataTable.Cell>1.25cm</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Height</DataTable.Cell>
                  <DataTable.Cell>1.25cm</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
            <View style={styles.card}>
              <DataTable theme={{ justifyContent: "center" }}>
                <DataTable.Header style={{ justifyContent: "center" }}>
                  <DataTable.Title style={styles.tableHeaders}>
                    COMPONENT
                  </DataTable.Title>
                  <DataTable.Title style={styles.tableHeaders}>
                    RATE
                  </DataTable.Title>
                  <DataTable.Title style={styles.tableHeaders}>
                    WEIGHT
                  </DataTable.Title>
                  <DataTable.Title style={styles.tableHeaders}>
                    DISCOUNT
                  </DataTable.Title>
                  <DataTable.Title style={styles.tableHeaders}>
                    VALUE
                  </DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>Gold</DataTable.Cell>
                  <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                  <DataTable.Cell>5.63 gms</DataTable.Cell>
                  <DataTable.Cell>-</DataTable.Cell>
                  <DataTable.Cell>18201.25</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gold</DataTable.Cell>
                  <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                  <DataTable.Cell>5.63 gms</DataTable.Cell>
                  <DataTable.Cell>-</DataTable.Cell>
                  <DataTable.Cell>18201.25</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gold</DataTable.Cell>
                  <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                  <DataTable.Cell>5.63 gms</DataTable.Cell>
                  <DataTable.Cell>-</DataTable.Cell>
                  <DataTable.Cell>18201.25</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gold</DataTable.Cell>
                  <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                  <DataTable.Cell>5.63 gms</DataTable.Cell>
                  <DataTable.Cell>-</DataTable.Cell>
                  <DataTable.Cell>18201.25</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gold</DataTable.Cell>
                  <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                  <DataTable.Cell>5.63 gms</DataTable.Cell>
                  <DataTable.Cell>-</DataTable.Cell>
                  <DataTable.Cell>18201.25</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </ScrollView>
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
              <Text style={{ color: "white", marginLeft: 10, fontSize: 15 }}>
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
  paginationDotStyle: {
    backgroundColor: primaryColor,
  },
  carouselContainer: {
    // borderWidth: 1,
    elevation: 2,
    height: 350,
    alignItems: "center",
  },
  carousel: {
    marginTop: 30,
  },

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
