import React, { Component } from "react";
import { View } from "react-native";
import {} from "react-native-paper";
import StepIndicator from "react-native-step-indicator";
import { secondaryColor, primaryColor } from "../../appStyles";
import _ from "lodash";

export default class OrderStatusBar extends Component {
  customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: primaryColor,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: secondaryColor,
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#fe7013",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#fe7013",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: primaryColor,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 16,
    stepIndicatorLabelCurrentColor: "white",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: primaryColor,
    labelSize: 15,
    currentStepLabelColor: secondaryColor,
  };
  labels = ["Placed", "Packed", "Shipped", "Delivered"];
  getCurrentPosition = () => {
    return _.findIndex(this.labels, (item) => item == this.props.status);
  };
  render() {
    return (
      <View>
        <StepIndicator
          stepCount={this.labels.length}
          customStyles={this.customStyles}
          currentPosition={this.getCurrentPosition()}
          labels={this.labels}
        />
      </View>
    );
  }
}
