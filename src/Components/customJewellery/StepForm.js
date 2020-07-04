import React, { Component } from "react";
import { View, StyleSheet, Image, Alert, Dimensions } from "react-native";
import { Text, Surface, Title } from "react-native-paper";
import { ProgressSteps, ProgressStep } from "../utility/ProgressSteps/index";
import { secondaryColor, primaryColor } from "../../appStyles";

import DesignList from "./DesignList";
import ImageCarousel from "../itemDetailsScreen/ImageCarousel";
import img from "../../res/necklace.png";
import DropDown from "../utility/CustomDropDown";

const { width } = Dimensions.get("window");

export default class StepForm extends Component {
  state = {
    selectedDesignIndex: -1,
    errors: { designSelectError: false },
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
    activeStep: 1,
  };

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
          <View style={{ paddingHorizontal: 10 }}>
            <Title style={{ alignSelf: "center" }}>CUSTOMIZE</Title>
            <View style={{ width: "100%" }}>
              <Surface style={styles.carouselContainer}>
                <ImageCarousel carouselItems={[img, img]} />
              </Surface>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Size:</Text>
              <DropDown
                labelField="size"
                data={[1, 2, 3, 4].map((size) => ({
                  size: size,
                }))}
                onSizeChange={this.sizeChange}
                selectedSize={this.state.selectedSize}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Size:</Text>
              <DropDown
                labelField="size"
                data={[1, 2, 3, 4].map((size) => ({
                  size: size,
                }))}
                onSizeChange={this.sizeChange}
                selectedSize={this.state.selectedSize}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Size:</Text>
              <DropDown
                labelField="size"
                data={[1, 2, 3, 4].map((size) => ({
                  size: size,
                }))}
                onSizeChange={this.sizeChange}
                selectedSize={this.state.selectedSize}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Size:</Text>
              <DropDown
                labelField="size"
                data={[1, 2, 3, 4].map((size) => ({
                  size: size,
                }))}
                onSizeChange={this.sizeChange}
                selectedSize={this.state.selectedSize}
              />
            </View>
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
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ width: "100%" }}>
              <Text>fslkg</Text>
            </View>
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
