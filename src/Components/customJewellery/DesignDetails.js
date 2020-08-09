import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Surface, Title } from "react-native-paper";

import ImageCarousel from "../itemDetailsScreen/ImageCarousel";
import img from "../../res/necklace.png";
import DropDown from "../utility/CustomDropDown";
import Loader from "../utility/LoaderDialog";
import { get } from "../../resources/Requests";
import { getGemCategories } from "../../resources/endpoints";

const { width } = Dimensions.get("window");

export default class DesignDetails extends Component {
  state = { selectedSize: "", gemData: {}, loading: true };
  async componentDidMount() {
    try {
      const gemData = await get(getGemCategories);
      console.log(gemData);
      this.setState({ gemData, loading: false });
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }
  render() {
    console.log(this.state.gemData);
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
        {Object.keys(this.state.gemData).map((key) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: 60 }}>
              <Text style={{ fontSize: 16 }}>{`${key}:`}</Text>
            </View>
            <DropDown
              labelField={key}
              data={this.state.gemData[key].map((item) => ({
                [key]: item,
              }))}
              onSizeChange={this.sizeChange}
              selectedSize={this.state.selectedSize}
            />
          </View>
        ))}
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
