import React, { Component } from "react";
import { View, StyleSheet, Linking } from "react-native";
import { Title, Surface, Text, Button } from "react-native-paper";
import ImageCarousel from "../itemDetailsScreen/ImageCarousel";
import { get } from "../../resources/Requests";
import { getCustomProductDetailsApi } from "../../resources/endpoints";
import img from "../../res/necklace.png";
import Loader from "../utility/LoaderDialog";
import { primaryColor, secondaryColor } from "../../appStyles";
import SizeDropDown from "../utility/CustomDropDown";
export default class ReviewDesign extends Component {
  state = {
    loading: true,
    design: {},
    gem: {},
    selectedSize: {},
  };
  async componentDidMount() {
    try {
      const { design, gem } = await get(
        getCustomProductDetailsApi(this.props.designId, this.props.gemId)
      );
      this.setState({
        loading: false,
        design,
        gem,
        selectedSize: design.sizes[0],
      });
    } catch (err) {
      this.setState({ loading: false });
      alert(err);
    }
  }

  sizeChange = (sizeObject) => {
    this.setState({ selectedSize: sizeObject });
  };
  goToLink = (link) => () => {
    Linking.openURL(link);
  };

  render() {
    const { gem: diamond } = this.state;
    return !this.state.loading ? (
      <View style={{ paddingHorizontal: 10 }}>
        <Title style={{ alignSelf: "center" }}>REVIEW</Title>
        <View style={{ width: "100%" }}>
          <Surface style={styles.carouselContainer}>
            <ImageCarousel
              carouselItems={
                this.state.design.images.length > 0
                  ? this.state.design.images.map((uri) => ({
                      uri,
                    }))
                  : [img]
              }
            />
          </Surface>
        </View>
        <Text style={styles.productTitle}>{this.state.design.name}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Size:</Text>
          <SizeDropDown
            labelField="size"
            contentField="price"
            data={this.state.design.sizes.map((size) => ({
              size: size.size,
              price: toCurrencyString(size.price),
            }))}
            onSizeChange={this.sizeChange}
            selectedSize={this.state.selectedSize}
          />
        </View>
        <Text style={{ fontSize: 20 }}>
          Total Price : {toCurrencyString(this.state.selectedSize.price)}
        </Text>
        <Surface
          style={[
            {
              marginVertical: 10,
              padding: 10,
              // elevation: 2,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ccc",
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={{ fontSize: 20 }}>{diamond.stoneNo}</Text>
            <Text style={{ color: "#777" }}>{`Color: ${diamond.color}`}</Text>
            <Text style={{ color: "#777" }}>{`Carats: ${diamond.carats}`}</Text>
            <Text style={{ color: "#777" }}>{`Cut: ${diamond.cut}`}</Text>
            <Text
              style={{ color: "#777" }}
            >{`Clarity ${diamond.clarity}`}</Text>
            <Text style={{ color: "#777" }}>{`Polish: ${diamond.polish}`}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, marginBottom: 10 }}
            >{`Rs.${diamond.netValue}/-`}</Text>
            <Button
              mode="contained"
              color={secondaryColor}
              labelStyle={{ color: "white" }}
              onPress={this.goToLink(diamond.videoLink)}
            >
              Certificate
            </Button>
          </View>
        </Surface>
      </View>
    ) : (
      <Loader visible={this.state.loading} />
    );
  }
}
const toCurrencyString = (number) => {
  return `\u20B9 ${number}/-`;
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    elevation: 2,
    height: 220,
    marginVertical: 10,
    alignItems: "center",
  },
  productTitle: { fontSize: 24, paddingLeft: 10, color: primaryColor },
});
