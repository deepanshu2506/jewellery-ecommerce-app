import React, { Component } from "react";
import { View } from "react-native";

import { secondaryColor, primaryColor } from "../appStyles";

import StepForm from "../Components/customJewellery/StepForm";

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
        <StepForm />
      </View>
    );
  }
}
