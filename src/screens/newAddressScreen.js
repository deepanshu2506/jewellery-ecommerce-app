import React, { Component } from "react";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { secondaryColor } from "../appStyles";

import { saveAddress, editAddress } from "../redux/actions/userActions";
import { connect } from "react-redux";

// const TextInput = (props) => (
//   <BaseTextInput
//     style={{ marginVertical: 7 }}
//     theme={{ colors: { primary: secondaryColor } }}
//     {...props}
//   />
// );

class NewAddressScreen extends Component {
  screenParams = this.props.route.params || {};
  state = {
    line1: this.screenParams.address ? this.screenParams.address.line1 : "",
    line2: this.screenParams.address ? this.screenParams.address.line2 : "",
    line3: this.screenParams.address ? this.screenParams.address.line3 : "",
    city: this.screenParams.address ? this.screenParams.address.city : "",
    pincode: this.screenParams.address ? this.screenParams.address.pincode : "",
    state: this.screenParams.address ? this.screenParams.address.state : "",
  };
  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: this.screenParams.address
        ? "Modify Address"
        : "Add New Address",
    });
  }
  _saveAddress = () => {
    if (this.screenParams.replace) {
      this.props.replaceAddress({
        ...this.state,
        id: this.screenParams.address.id,
      });
    } else {
      this.props.saveNewAddress(this.state);
    }
    this.props.navigation.goBack();
  };

  render() {
    console.log(this.screenParams);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ padding: 10, backgroundColor: "white" }}>
          <KeyboardAvoidingView behavior="padding">
            <TextInput
              style={{ marginVertical: 7 }}
              theme={{ colors: { primary: secondaryColor } }}
              mode="outlined"
              blurOnSubmit={false}
              label="Address Line 1"
              value={this.state.line1}
              onChangeText={(text) => {
                this.setState({ line1: text.trim() });
              }}
              onSubmitEditing={() => {
                this.addressLine2.focus();
              }}
            />
            <TextInput
              style={{ marginVertical: 7 }}
              theme={{ colors: { primary: secondaryColor } }}
              mode="outlined"
              label="Address Line 2"
              value={this.state.line2}
              onChangeText={(text) => {
                this.setState({ line2: text.trim() });
              }}
              blurOnSubmit={false}
              ref={(input) => {
                this.addressLine2 = input;
              }}
              onSubmitEditing={() => {
                this.addressLine3.focus();
              }}
            />
            <TextInput
              style={{ marginVertical: 7 }}
              theme={{ colors: { primary: secondaryColor } }}
              mode="outlined"
              label="Address Line 3"
              value={this.state.line3}
              onChangeText={(text) => {
                this.setState({ line3: text.trim() });
              }}
              blurOnSubmit={false}
              ref={(input) => {
                this.addressLine3 = input;
              }}
              onSubmitEditing={() => {
                this.city.focus();
              }}
            />
            <TextInput
              style={{ marginVertical: 7 }}
              theme={{ colors: { primary: secondaryColor } }}
              mode="outlined"
              label="City"
              value={this.state.city}
              onChangeText={(text) => {
                this.setState({ city: text.trim() });
              }}
              blurOnSubmit={false}
              ref={(input) => {
                this.city = input;
              }}
              onSubmitEditing={() => {
                this.pincode.focus();
              }}
            />
            <TextInput
              style={{ marginVertical: 7 }}
              theme={{ colors: { primary: secondaryColor } }}
              mode="outlined"
              label="pincode"
              maxLength={6}
              keyboardType="numeric"
              value={this.state.pincode}
              onChangeText={(text) => {
                this.setState({ pincode: text.trim() });
              }}
              blurOnSubmit={false}
              ref={(input) => {
                this.pincode = input;
              }}
              onSubmitEditing={() => {
                this.addState.focus();
              }}
            />
            <TextInput
              style={{ marginVertical: 7 }}
              theme={{ colors: { primary: secondaryColor } }}
              mode="outlined"
              label="State"
              value={this.state.state}
              onChangeText={(text) => {
                this.setState({ state: text.trim() });
              }}
              onSubmitEditing={false}
              ref={(input) => {
                this.addState = input;
              }}
              onSubmitEditing={this._saveAddress}
            />
          </KeyboardAvoidingView>
        </ScrollView>
        <Button
          style={{
            borderRadius: 0,
          }}
          color={secondaryColor}
          labelStyle={{ color: "white", paddingVertical: 2, fontSize: 17 }}
          mode="contained"
          onPress={this._saveAddress}
        >
          {this.screenParams.replace ? "replace" : "Save"}
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveNewAddress: (address) => {
    dispatch(saveAddress(address));
  },
  replaceAddress: (address) => {
    dispatch(editAddress(address));
  },
});

export default connect(null, mapDispatchToProps)(NewAddressScreen);
