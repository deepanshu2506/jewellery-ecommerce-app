import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Title, TouchableRipple } from "react-native-paper";
import { secondaryColor, primaryColor } from "../../appStyles";

import img from "../../res/necklace.png";

export default class DesignList extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <Title style={{ alignSelf: "center", marginBottom: 10 }}>
          SELECT DESIGN
        </Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View
              style={[
                styles.designCard,
                this.props.selectedItem == index && styles.selectedCard,
              ]}
            >
              <TouchableRipple
                rippleColor={primaryColor}
                onPress={() => this.props.onDesignSelect(index)}
              >
                <View style={styles.cardView}>
                  <View style={styles.imageView}>
                    <Image style={styles.image} source={img} />
                  </View>
                  <Text style={styles.designName}>Design Name</Text>
                </View>
              </TouchableRipple>
            </View>
          ))}
        </View>
      </View>
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
