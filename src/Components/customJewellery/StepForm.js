import React, { Component } from "react";
import { View, StyleSheet, Image, Alert, Dimensions } from "react-native";
import { Text, Surface, Title } from "react-native-paper";
import { ProgressSteps, ProgressStep } from "../utility/ProgressSteps/index";
import { secondaryColor, primaryColor } from "../../appStyles";

import DesignList from "./DesignList";

import DesignDetails from "./DesignDetails";
import ReviewDesign from "./ReviewDesign";

const { width } = Dimensions.get("window");

export default class StepForm extends Component {
  state = {
    selectedDesignIndex: "",
    selectedDiamond: "",
    itemImages: [],
    errors: { designSelectError: false, gemSelectError: false },
  };

  ProgressStepsProps = {
    activeStepIconBorderColor: secondaryColor,
    progressBarColor: secondaryColor,
    completedProgressBarColor: primaryColor,
    completedStepIconColor: primaryColor,
    activeLabelColor: secondaryColor,
    completedLabelColor: primaryColor,
    disabledStepIconColor: "#999",
    disabledStepIconBorderColor: "#999",
    labelColor: "#999",
    activeStep: 0,
  };

  _selectDesign = (id, images) => {
    this.setState({
      selectedDesignIndex: id,
      itemImages: images,
      errors: { designSelectError: false },
    });
  };
  gemselectRef = React.createRef();

  _selectDiamond = (id) => {
    this.setState({ selectedDiamond: id, errors: { gemSelectError: false } });
  };

  _blockDesign = () => {
    if (this.state.selectedDesignIndex == "") {
      this.setState({ errors: { designSelectError: true } });
      Alert.alert("Error", "No design is Selected");
    }
  };

  _blockGem = () => {
    if (this.state.selectedDiamond == "") {
      this.setState({ errors: { gemSelectError: true } });
      Alert.alert("Error", "No gem is Selected");
    }
  };
  _clearGemSelection = () => {
    this.setState({ selectedDiamond: "" });
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
          errors={this.state.errors.gemSelectError}
          nextBtnStyle={styles.nextBtnStyle}
          nextBtnTextStyle={styles.nextBtnTextStyle}
          previousBtnStyle={styles.prevBtnStyle}
          previousBtnTextStyle={styles.prevBtnTextStyle}
          onNext={this._blockGem}
          ref={this.gemselectRef}
        >
          <DesignDetails
            designId={this.state.selectedDesignIndex}
            itemImages={this.state.itemImages}
            onSelect={this._selectDiamond}
            selectedDiamond={this.state.selectedDiamond}
            clearGemSelection={this._clearGemSelection}
            scrollViewRef={this.gemselectRef}
          />
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
          <ReviewDesign
            designId={this.state.selectedDesignIndex}
            itemImages={this.state.itemImages}
            gemId={this.state.selectedDiamond}
          />
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

  carouselContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    elevation: 2,
    height: 250,
    marginVertical: 10,
    alignItems: "center",
  },
});
