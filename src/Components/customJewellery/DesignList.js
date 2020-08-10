import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Title, TouchableRipple } from "react-native-paper";
import { secondaryColor, primaryColor } from "../../appStyles";

import img from "../../res/necklace.png";
import Loader from "../utility/LoaderDialog";
import { get } from "../../resources/Requests";
import { getCustomDesigns } from "../../resources/endpoints";

export default class DesignList extends Component {
  state = { loading: false, designList: [] };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const designs = await get(getCustomDesigns);
      console.log(designs);
      this.setState({ loading: false, designList: designs });
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }

  render() {
    return !this.state.loading ? (
      <View style={{ paddingHorizontal: 5 }}>
        <Title style={{ alignSelf: "center", marginBottom: 10 }}>
          SELECT DESIGN
        </Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.state.designList.map((item, index) => (
            <View
              style={[
                styles.designCard,
                this.props.selectedItem == item._id && styles.selectedCard,
              ]}
            >
              <TouchableRipple
                rippleColor={primaryColor}
                onPress={() => this.props.onDesignSelect(item._id, item.images)}
              >
                <View style={styles.cardView}>
                  <View style={styles.imageView}>
                    <Image
                      style={styles.image}
                      source={
                        item.images.length > 0 ? { uri: item.images[0] } : img
                      }
                    />
                  </View>
                  <Text style={styles.designName}>{item.name}</Text>
                </View>
              </TouchableRipple>
            </View>
          ))}
        </View>
      </View>
    ) : (
      <Loader visible={this.state.loading} />
    );
  }
}

const styles = StyleSheet.create({
  designCard: {
    height: 220,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 8,
    width: "47.5%",
    margin: 5,
  },
  selectedCard: { borderColor: secondaryColor, borderWidth: 1.5 },
  cardView: { alignItems: "center", padding: 5 },
  imageView: { width: "70%", height: 150 },
  image: { width: "100%", height: "100%" },
  designName: {
    alignSelf: "flex-start",
    fontSize: 19,
    marginTop: 5,
  },
});
