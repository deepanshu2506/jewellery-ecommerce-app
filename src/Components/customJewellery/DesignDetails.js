import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Surface, Title } from "react-native-paper";

import ImageCarousel from "../itemDetailsScreen/ImageCarousel";
import img from "../../res/necklace.png";
import DropDown from "../utility/CustomDropDown";
import Loader from "../utility/LoaderDialog";
import { get } from "../../resources/Requests";

const { width } = Dimensions.get("window");

export default class DesignDetails extends Component {
  state = { selectedSize: "", loading: false };
  //   componentDidMount() {
  //     try {
  //       const designData = get();
  //     }
  //   }
  render() {
    return !this.state.loading ? (
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Size:</Text>
          <DropDown
            labelField="size"
            data={[1, 2, 3, 4].map((size) => ({
              size: size,
            }))}
            onSizeChange={this.sizeChange}
            selectedSize={this.state.selectedSize}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Size:</Text>
          <DropDown
            labelField="size"
            data={[1, 2, 3, 4].map((size) => ({
              size: size,
            }))}
            onSizeChange={this.sizeChange}
            selectedSize={this.state.selectedSize}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Size:</Text>
          <DropDown
            labelField="size"
            data={[1, 2, 3, 4].map((size) => ({
              size: size,
            }))}
            onSizeChange={this.sizeChange}
            selectedSize={this.state.selectedSize}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Size:</Text>
          <DropDown
            labelField="size"
            data={[1, 2, 3, 4].map((size) => ({
              size: size,
            }))}
            onSizeChange={this.sizeChange}
            selectedSize={this.state.selectedSize}
          />
        </View>
      </View>
    ) : (
      <Loader />
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
