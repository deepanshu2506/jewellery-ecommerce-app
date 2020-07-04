import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Headline, Title, TouchableRipple } from "react-native-paper";
import {
  ProgressSteps,
  ProgressStep,
} from "../Components/utility/ProgressSteps/index";
import { secondaryColor, primaryColor } from "../appStyles";

import img from "../res/necklace.png";

export default class CustomJewellery extends Component {
  state = { selectedItemIndex: -1 };
  ProgressStepsProps = {
    activeStepIconBorderColor: secondaryColor,
    progressBarColor: secondaryColor,
    completedProgressBarColor: primaryColor,
    completedStepIconColor: primaryColor,
    activeLabelColor: secondaryColor,
    completedLabelColor: primaryColor,
    disabledStepIconColor: "#999",
    disabledStepIconBorderColor: "#999",
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ProgressSteps {...this.ProgressStepsProps}>
          <ProgressStep
            scrollable={true}
            label="Select Design"
            nextBtnText="Customize"
            nextBtnStyle={styles.nextBtnStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            prevBtnStyle={styles.prevBtnStyle}
            prevBtnTextStyle={styles.prevBtnTextStyle}
          >
            <View style={{ paddingHorizontal: 5 }}>
              <Title style={{ alignSelf: "center", marginBottom: 10 }}>
                SELECT DESIGN
              </Title>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <View
                    style={[
                      styles.designCard,
                      this.state.selectedItemIndex == index &&
                        styles.selectedCard,
                    ]}
                  >
                    <TouchableRipple
                      rippleColor={primaryColor}
                      onPress={() =>
                        this.setState({ selectedItemIndex: index })
                      }
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
          </ProgressStep>
          <ProgressStep
            label="customize"
            previousBtnText="Change Design"
            nextBtnText="Review Design"
            nextBtnStyle={styles.nextBtnStyle}
            nextBtnTextStyle={styles.nextBtnTextStyle}
            previousBtnStyle={styles.prevBtnStyle}
            previousBtnTextStyle={styles.prevBtnTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Review"
            previousBtnText="Customize"
            finishBtnText="Add To Cart"
            nextBtnTextStyle={styles.nextBtnTextStyle}
            nextBtnStyle={styles.nextBtnStyle}
            previousBtnStyle={styles.prevBtnStyle}
            previousBtnTextStyle={styles.prevBtnTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nextBtnStyle: {
    backgroundColor: secondaryColor,
    borderRadius: 5,
    padding: 10,
  },
  nextBtnTextStyle: { color: "white" },
  prevBtnStyle: {
    backgroundColor: secondaryColor,
    borderRadius: 5,
    padding: 10,
  },
  prevBtnTextStyle: { color: "white" },

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
