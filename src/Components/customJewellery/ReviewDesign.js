import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Title, Surface } from "react-native-paper";
import ImageCarousel from "../itemDetailsScreen/ImageCarousel";

export default class ReviewDesign extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <Title style={{ alignSelf: "center" }}>CUSTOMIZE</Title>
        <View style={{ width: "100%" }}>
          <Surface style={styles.carouselContainer}>
            <ImageCarousel
              carouselItems={
                this.props.itemImages.length > 0
                  ? this.props.itemImages.map((uri) => ({ uri }))
                  : [img]
              }
            />
          </Surface>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    elevation: 2,
    height: 250,
    marginVertical: 10,
    alignItems: "center",
  },
});
