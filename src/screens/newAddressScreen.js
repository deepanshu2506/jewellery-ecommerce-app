import React, { Component } from "react";
import { ScrollView } from "react-native";
import { TextInput as BaseTextInput, Button } from "react-native-paper";
import { secondaryColor } from "../appStyles";

import { saveAddress } from "../redux/actions/userActions";
import { connect } from "react-redux";

const TextInput = (props) => (
  <BaseTextInput
    style={{ marginVertical: 7 }}
    theme={{ colors: { primary: secondaryColor } }}
    {...props}
  />
);

class NewAddressScreen extends Component {
  state = { line1: "", line2: "", line3: "", city: "", pincode: "", state: "" };

  _saveAddress = () => {
    //save the address to the user account

    this.props.saveNewAddress(this.state);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
        <TextInput
          mode="outlined"
          label="Address Line 1"
          value={this.state.line1}
          onChangeText={(text) => {
            this.setState({ line1: text.trim() });
          }}
        />
        <TextInput
          mode="outlined"
          label="Address Line 2"
          value={this.state.line2}
          onChangeText={(text) => {
            this.setState({ line2: text.trim() });
          }}
        />
        <TextInput
          mode="outlined"
          label="Address Line 3"
          value={this.state.line3}
          onChangeText={(text) => {
            this.setState({ line3: text.trim() });
          }}
        />
        <TextInput
          mode="outlined"
          label="City"
          value={this.state.city}
          onChangeText={(text) => {
            this.setState({ city: text.trim() });
          }}
        />
        <TextInput
          mode="outlined"
          label="pincode"
          maxLength={6}
          keyboardType="numeric"
          value={this.state.pincode}
          onChangeText={(text) => {
            this.setState({ pincode: text.trim() });
          }}
        />
        <TextInput
          mode="outlined"
          label="State"
          value={this.state.state}
          onChangeText={(text) => {
            this.setState({ state: text.trim() });
          }}
        />
        <Button
          style={{ marginTop: 20 }}
          color={secondaryColor}
          labelStyle={{ color: "white" }}
          mode="contained"
          onPress={this._saveAddress}
        >
          Save
        </Button>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveNewAddress: (address) => {
    dispatch(saveAddress(address));
  },
});

export default connect(null, mapDispatchToProps)(NewAddressScreen);
