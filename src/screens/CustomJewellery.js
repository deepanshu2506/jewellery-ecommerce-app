import React, { Component } from "react";
import { View, Text } from "react-native";
import {} from "react-native-paper";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { secondaryColor, primaryColor } from "../appStyles";

export default class CustomJewellery extends Component {
  ProgressStepsProps = {
    activeStepIconBorderColor: secondaryColor,
    progressBarColor: secondaryColor,
    completedProgressBarColor: primaryColor,
    labelFontSize: 20,
    completedStepIconColor: primaryColor,
    activeLabelColor: secondaryColor,
    completedLabelColor: primaryColor,
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
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>
                This is the content within step 1!
              </Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="customize"
            previousBtnText="Change Design"
            nextBtnText="Review"
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Review"
            previousBtnText="Customize"
            nextBtnText="AddToCart"
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
