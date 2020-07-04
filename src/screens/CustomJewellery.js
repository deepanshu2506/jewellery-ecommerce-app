import React, { Component } from "react";
import { View } from "react-native";

import StepForm from "../Components/customJewellery/StepForm";

export default class CustomJewellery extends Component {
  state = { selectedItemIndex: -1 };

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
