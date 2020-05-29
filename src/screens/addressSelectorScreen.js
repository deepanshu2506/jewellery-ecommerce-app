import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Button, Surface } from "react-native-paper";
import { secondaryColor } from "../appStyles";

import { useNavigation } from "@react-navigation/native";

const AddressCard = (props) => {
  const navigation = useNavigation();
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
        <Text>Address line 1</Text>
        <Text>Address line 2</Text>
        <Text>Address line 3</Text>
      </View>
      <View>
        <Button
          mode="outlined"
          color={secondaryColor}
          onPress={() => {
            navigation.navigate("payment-selector-screen");
          }}
        >
          Select
        </Button>
      </View>
    </Surface>
  );
};

export default class AddressSelectorScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        <AddressCard />
        <AddressCard />
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