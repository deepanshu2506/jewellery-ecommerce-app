import React, { Component } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { Text, Headline, Title, TouchableRipple } from "react-native-paper";
import { ProgressSteps, ProgressStep } from "../utility/ProgressSteps/index";
import { secondaryColor, primaryColor } from "../../appStyles";

import DesignList from "./DesignList";

export default class StepForm extends Component {
  state = { selectedDesignIndex: -1, errors: { designSelectError: false } };
  constructor(props) {
    super(props);
  }

  _selectDesign = (index) => {
    this.setState({
      selectedDesignIndex: index,
      errors: { designSelectError: false },
    });
  };

  _blockDesign = () => {
    if (this.state.selectedDesignIndex == -1) {
      this.setState({ errors: { designSelectError: true } });
      Alert.alert("Error", "No design is Selected");
    }
  };
  render() {
    return (
      <ProgressSteps {...this.ProgressStepsProps}>
        <ProgressStep
          scrollable={true}
          label="Select Design"
          errors={this.state.errors.designSelectError}
          nextBtnText="Customize"
          nextBtnStyle={styles.nextBtnStyle}
          nextBtnTextStyle={styles.nextBtnTextStyle}
          prevBtnStyle={styles.prevBtnStyle}
          prevBtnTextStyle={styles.prevBtnTextStyle}
          onNext={this._blockDesign}
        >
          <DesignList
            onDesignSelect={this._selectDesign}
            selectedItem={this.state.selectedDesignIndex}
          />
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
});
