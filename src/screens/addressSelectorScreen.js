import React from "react";
import { View, ScrollView, Text, TouchableNativeFeedback } from "react-native";
import { Button, Surface, IconButton } from "react-native-paper";
import { secondaryColor } from "../appStyles";

import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import {
  changeCurrentAddress,
  removeAddress,
} from "../redux/actions/userActions";

const AddressCardComponent = ({ address, change, remove }) => {
  const navigation = useNavigation();
  console.log(address);
  return (
    <Surface
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6,
        elevation: 2,
      }}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#000")}
        onPress={() => {
          navigation.navigate("add-new-address-screen", {
            replace: true,
            address,
          });
        }}
      >
        <View
          style={{
            flexGrow: 5,
            justifyContent: "center",
            width: "70%",
            color: "black",
            paddingLeft: 10,
            // borderWidth: 1,
          }}
        >
          <Text>{address.line1}</Text>
          <Text>{address.line2}</Text>
          <Text>{address.line3}</Text>
          <Text>{`${address.city} - ${address.pincode}`}</Text>
          <Text>{address.state}</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={{ flexGrow: 1, flexDirection: "row" }}>
        <IconButton
          icon="check"
          color="green"
          size={30}
          onPress={() => {
            change(address);
            navigation.goBack();
          }}
        />
        <IconButton
          icon="delete-outline"
          color="red"
          size={30}
          onPress={() => {
            remove(address);
          }}
        />
      </View>
    </Surface>
  );
};

const mapDispatchToProps = (dispatch) => ({
  change: (address) => {
    dispatch(changeCurrentAddress(address));
  },
  remove: (address) => {
    dispatch(removeAddress(address));
  },
});

const AddressCard = connect(null, mapDispatchToProps)(AddressCardComponent);

class AddressSelectorScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        {this.props.addresses.map((address) => (
          <AddressCard address={address} />
        ))}
        <Button
          mode="contained"
          color={secondaryColor}
          labelStyle={{ color: "white" }}
          style={{ margin: 10 }}
          onPress={() => {
            this.props.navigation.navigate("add-new-address-screen");
          }}
        >
          Add new Address
        </Button>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  addresses: state.user.addresses,
});

export default connect(mapStateToProps)(AddressSelectorScreen);
