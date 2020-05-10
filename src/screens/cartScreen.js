import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";
import { Surface, Button } from "react-native-paper";
import { secondaryColor, primaryColor } from "../appStyles";

import Img from "../res/loginIntroArt.png";

const Card = (props) => (
  <Surface
    style={{
      marginBottom: 10,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#ddd",
      elevation: 1,
      marginHorizontal: 5,
      borderRadius: 3,
    }}
  >
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: "40%",
          height: 160,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            height: "80%",
            borderWidth: 0.5,
            borderColor: "#bbb",
          }}
        >
          <Image source={Img} style={{ width: "100%", height: "100%" }} />
        </View>
      </View>
      <View style={{ width: "60%", justifyContent: "center" }}>
        <Text style={{ fontSize: 17 }}>Mens Cluster Ring</Text>
        <Text style={{ fontSize: 12, color: "#999", marginBottom: 10 }}>
          KJKJ33-JFMR54
        </Text>
        <Text>Size : 12</Text>
        <Text>Quantity : 1</Text>
        <Text style={{ marginTop: 10, fontSize: 18, color: secondaryColor }}>
          {`\u20b9`}14,867
          <Text
            style={{
              fontSize: 12,
              textDecorationLine: "line-through",
              color: "#999",
              paddingLeft: 10,
            }}
          >
            {`\t \u20b9`}17,367
          </Text>
        </Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 5,
      }}
    >
      <Button mode="outlined" color={secondaryColor} style={{ width: "35%" }}>
        Remove
      </Button>
      <Button mode="outlined" style={{ width: "45%" }}>
        Save to wishlist
      </Button>
    </View>
  </Surface>
);

export default class cartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, borderWidth: 1 }}>
          <Surface
            style={{
              flexDirection: "row",
              // height: 60,
              alignItems: "center",
              justifyContent: "space-around",
              padding: 10,

              elevation: 4,
              borderBottomWidth: 1,
              borderColor: "#ddd",
              paddingTop: 15,
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={{ fontSize: 17 }}>
                Deliver To{" "}
                <Text style={{ fontWeight: "bold" }}>Tom Holland</Text>
              </Text>
              <Text> 445 Mount Eden Road, Mount Eden...</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Button
                mode="outlined"
                labelStyle={{ textTransform: "capitalize" }}
              >
                Change
              </Button>
            </View>
          </Surface>
          <Text
            style={{ fontSize: 18, marginVertical: 10, paddingHorizontal: 10 }}
          >
            Total (3 Item): {`  \u20B9 `}44,601.00
          </Text>
          <Card />
          <Card />
          <Card />
        </ScrollView>
        <Surface style={styles.priceView}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{"\u20B9"}44,601</Text>
            <Text
              style={{ color: "white", alignSelf: "flex-end", marginLeft: 10 }}
            >
              pay Securely
            </Text>
          </View>
          <Button
            mode="contained"
            icon="lock"
            labelStyle={{ color: "white" }}
            color={secondaryColor}
            onPress={() => {
              this.props.navigation.navigate("address-selector-screen");
            }}
          >
            BUY NOW
          </Button>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  priceView: {
    paddingLeft: 30,
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: primaryColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 10,
  },
  price: { fontSize: 25, color: "white" },
  actualPrice: {
    color: "#eee",
    textDecorationLine: "line-through",
    alignSelf: "flex-end",
    // marginBottom: 5,
    marginLeft: 5,
  },
  addToCartButton: {
    flexDirection: "row",
    backgroundColor: secondaryColor,
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 10,
  },
});
