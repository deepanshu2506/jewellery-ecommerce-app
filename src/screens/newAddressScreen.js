import React, { Component } from "react";
import { ScrollView } from "react-native";
import { TextInput as BaseTextInput, Button } from "react-native-paper";
import { secondaryColor } from "../appStyles";

const TextInput = (props) => (
  <BaseTextInput
    style={{ marginVertical: 7 }}
    theme={{ colors: { primary: secondaryColor } }}
    {...props}
  />
);

export default class NewAddressScreen extends Component {
  render() {
    return (
      <ScrollView style={{ padding: 10, backgroundColor: "white", flex: 1 }}>
        <TextInput mode="outlined" label="Address Line 1" />
        <TextInput mode="outlined" label="Address Line 2" />
        <TextInput mode="outlined" label="Address Line 3" />
        <TextInput mode="outlined" label="City" />
        <TextInput
          mode="outlined"
          label="pincode"
          maxLength={6}
          keyboardType="numeric"
        />
        <TextInput mode="outlined" label="State" />
        <Button
          style={{ marginTop: 20 }}
          color={secondaryColor}
          labelStyle={{ color: "white" }}
          mode="contained"
          onPress={() => {
            //save the address to the user account
            this.props.navigation.goBack();
          }}
        >
          Save
        </Button>
      </ScrollView>
    );
  }
}
