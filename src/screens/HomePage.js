import React, { Component } from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import { Text, Surface, Title, TouchableRipple } from "react-native-paper";
import Ring from "../res/ring.png";
import Necklace from "../res/necklace.png";
import Pendant from "../res/pendant.png";
import Bangle from "../res/bangle.png";
import Earring from "../res/earring.png";
import Bracelet from "../res/bracelet.png";
import { secondaryColor } from "../appStyles";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2 - 20;

export default class HomePage extends Component {
  navigateTo = (type) => () => {
    this.props.navigation.push("search", { search: type });
  };
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <Surface style={styles.card}>
          <TouchableRipple onPress={this.navigateTo("ring")}>
            <View>
              <View style={styles.imgView}>
                <Image style={styles.img} source={Ring} />
              </View>
              <Text style={styles.caption}>Rings</Text>
            </View>
          </TouchableRipple>
        </Surface>
        <Surface style={styles.card}>
          <TouchableRipple onPress={this.navigateTo("Pendant")}>
            <View>
              <View style={styles.imgView}>
                <Image style={styles.img} source={Pendant} />
              </View>
              <Text style={styles.caption}>Pendants</Text>
            </View>
          </TouchableRipple>
        </Surface>
        <Surface style={styles.card}>
          <TouchableRipple onPress={this.navigateTo("bangle")}>
            <View>
              <View style={styles.imgView}>
                <Image style={styles.img} source={Bangle} />
              </View>
              <Text style={styles.caption}>Bangles</Text>
            </View>
          </TouchableRipple>
        </Surface>
        <Surface style={styles.card}>
          <TouchableRipple onPress={this.navigateTo("earring")}>
            <View>
              <View style={styles.imgView}>
                <Image style={styles.img} source={Earring} />
              </View>
              <Text style={styles.caption}>Earrings</Text>
            </View>
          </TouchableRipple>
        </Surface>
        <Surface style={styles.card}>
          <TouchableRipple onPress={this.navigateTo("bracelet")}>
            <View>
              <View style={styles.imgView}>
                <Image style={styles.img} source={Bracelet} />
              </View>
              <Text style={styles.caption}>Bracelets</Text>
            </View>
          </TouchableRipple>
        </Surface>
        <Surface style={styles.card}>
          <TouchableRipple onPress={this.navigateTo("necklace")}>
            <View>
              <View style={styles.imgView}>
                <Image style={styles.img} source={Necklace} />
              </View>
              <Text style={styles.caption}>Necklace</Text>
            </View>
          </TouchableRipple>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    margin: 10,
    elevation: 5,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  imgView: { width: cardWidth * 0.45, height: cardWidth * 0.45 },
  img: { width: "100%", height: "100%", opacity: 0.9 },
  caption: {
    marginTop: 10,
    fontSize: 25,
    color: secondaryColor,
    fontWeight: "400",
  },
});
