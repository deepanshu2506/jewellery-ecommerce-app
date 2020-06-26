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

const screenWidth = Math.round(Dimensions.get("window").width);

export default class ImageCarousel extends Component {
  state = { activeIndex: 0 };

  _renderItem = ({ item, index }, parallexProps) => {
    return (
      <View style={{ height: "100%" }}>
        <ZoomHandler source={{ uri: item }} />
        {/* <Image source={img} style={{ width: "100%", height: "100%" }} /> */}
      </View>
    );
  };

  render() {
    return (
      <Surface style={styles.carouselContainer}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          containerCustomStyle={styles.carousel}
          data={this.props.carouselItems}
          renderItem={this._renderItem}
          sliderWidth={300}
          loop={true}
          itemWidth={300}
          onBeforeSnapToItem={(index) => this.setState({ activeIndex: index })}
          lockScrollWhileSnapping
          autoplay
          autoplayDelay={1000}
        />
        <Pagination
          dotsLength={this.props.carouselItems.length}
          activeDotIndex={this.state.activeIndex}
          dotStyle={styles.paginationDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </Surface>
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
    height: 350,
    alignItems: "center",
  },
  carousel: {
    marginTop: 30,
  },
});
