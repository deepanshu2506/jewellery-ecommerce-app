/**
 * todo:
 * 1.retrieve images from the items
 */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Surface } from "react-native-paper";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { primaryColor, secondaryColor } from "../../appStyles";
import ZoomHandler from "./ZoomHandler";

// import img from "../../res/earring1.jpg";

export default class ImageCarousel extends Component {
  state = { activeIndex: 0 };

  _renderItem = ({ item, index }, parallexProps) => {
    return (
      <View style={{ height: "100%" }}>
        <ZoomHandler source={item} />
        {/* <Image source={img} style={{ width: "100%", height: "100%" }} /> */}
      </View>
    );
  };

  render() {
    return (
      <View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          containerCustomStyle={styles.carousel}
          data={this.props.carouselItems}
          renderItem={this._renderItem}
          sliderWidth={350}
          itemWidth={350}
          onBeforeSnapToItem={(index) => this.setState({ activeIndex: index })}
          lockScrollWhileSnapping
        />
        <Pagination
          dotsLength={this.props.carouselItems.length}
          activeDotIndex={this.state.activeIndex}
          dotStyle={styles.paginationDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          containerStyle={{ paddingVertical: 10 }}
        />
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
    // elevation: 2,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
