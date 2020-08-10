import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  VirtualizedList,
  Linking,
} from "react-native";
import {
  Text,
  Surface,
  Title,
  Button,
  TouchableRipple,
} from "react-native-paper";

import ImageCarousel from "../itemDetailsScreen/ImageCarousel";
import img from "../../res/necklace.png";
import DropDown from "../utility/CustomDropDown";
import Loader from "../utility/LoaderDialog";
import { get, post } from "../../resources/Requests";
import { getGemCategories, searchDiamondsApi } from "../../resources/endpoints";
import { secondaryColor } from "../../appStyles";

const { width } = Dimensions.get("window");

export default class DesignDetails extends Component {
  state = {
    selectedSize: "",
    gemData: {},
    loading: true,
    diamondFilters: {},
    diamonds: [],
  };
  async componentDidMount() {
    try {
      this.props.clearGemSelection();
      const gemData = await get(getGemCategories);

      this.setState({ gemData, loading: false });
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }
  filterChange = (key) => (value) => {
    this.setState((prevState) => ({
      diamondFilters: { ...prevState.diamondFilters, [key]: value[key] },
    }));
  };

  goToLink = (link) => () => {
    Linking.openURL(link);
  };
  searchDiamonds = async () => {
    try {
      console.log(this.state.diamondFilters);
      const diamonds = await get(searchDiamondsApi, this.state.diamondFilters);

      this.setState({ loading: false, diamonds });
    } catch (err) {
      this.setState({ loading: false });
    }
  };
  renderDiamond = ({ item: diamond, index }) => {
    // console.log(index);
    return (
      <Surface
        style={[
          {
            marginVertical: 10,
            padding: 10,
            elevation: 2,
          },
          this.props.selectedDiamond == diamond._id && {
            borderColor: secondaryColor,
            borderWidth: 1,
          },
        ]}
        key={diamond._id}
      >
        <TouchableRipple
          style={{ flex: 1 }}
          onPress={() => {
            this.props.onSelect(diamond._id);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ flexGrow: 1 }}>
              <Text style={{ fontSize: 20 }}>{diamond.stoneNo}</Text>
              <Text style={{ color: "#777" }}>{`Color: ${diamond.color}`}</Text>
              <Text style={{ color: "#777" }}>{`Cut: ${diamond.cut}`}</Text>
              <Text
                style={{ color: "#777" }}
              >{`Clarity ${diamond.clarity}`}</Text>
              <Text
                style={{ color: "#777" }}
              >{`Polish: ${diamond.polish}`}</Text>
            </View>
            <View>
              <Button
                mode="contained"
                color={secondaryColor}
                labelStyle={{ color: "white" }}
                onPress={this.goToLink(diamond.videoLink)}
              >
                Certificate
              </Button>
            </View>
          </View>
        </TouchableRipple>
      </Surface>
    );
  };
  render() {
    console.log(this.state.diamonds.length);
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
              onSizeChange={this.filterChange(key)}
              selectedSize={
                this.state.diamondFilters[key]
                  ? {
                      [key]: this.state.diamondFilters[key],
                    }
                  : {}
              }
            />
          </View>
        ))}
        <Button
          mode="contained"
          color={secondaryColor}
          labelStyle={{ color: "white" }}
          onPress={this.searchDiamonds}
        >
          Search Diamonds
        </Button>
        <FlatList
          initialNumToRender={10}
          data={this.state.diamonds}
          renderItem={this.renderDiamond}
          keyExtractor={({ _id }) => _id}
        />
        {/* {this.state.diamonds.map((diamond) => } */}
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
