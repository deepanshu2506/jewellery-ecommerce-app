import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Button, Surface } from "react-native-paper";
import { secondaryColor } from "../appStyles";

import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import { changeCurrentAddress } from "../redux/actions/userActions";

const AddressCardComponent = ({ address, changeAddress }) => {
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
      <View style={{ flexGrow: 6 }}>
        <Text>{address.line1}</Text>
        <Text>{address.line2}</Text>
        <Text>{address.line3}</Text>
        <Text>{`${address.city} - ${address.pincode}`}</Text>
        <Text>{address.state}</Text>
      </View>
      <View>
        <Button
          mode="outlined"
          color={secondaryColor}
          onPress={() => {
            changeAddress(address);
            navigation.goBack();
          }}
        >
          Select
        </Button>
      </View>
    </Surface>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeAddress: (address) => {
    dispatch(changeCurrentAddress(address));
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
