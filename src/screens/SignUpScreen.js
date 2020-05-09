import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Constants from "expo-constants";
import { Surface, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import { primaryColor, secondaryColor } from "../appStyles";

import VectorArt from "../res/signupArt.png";
import GoogleLogo from "../res/googleLogo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LoginIntroScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={{ width: "100%", height: "100%", opacity: 0.8 }}
            source={VectorArt}
          />
        </View>
        <View>
          <TextInput
            mode="flat"
            label="Name"
            underlineColor="#3f3d56"
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
          <TextInput
            mode="flat"
            keyboardType="numeric"
            label="Mobile Number"
            underlineColor="#3f3d56"
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
          <TextInput
            mode="flat"
            label="password"
            secureTextEntry
            underlineColor="#3f3d56"
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#ffffff")}
          >
            <Surface style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </Surface>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "space-around",
  },
  imgContainer: {
    width: "75%",
    height: 190,
    alignSelf: "center",
  },
  loginButton: {
    // borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 40,
    marginTop: 20,
    elevation: 3,
    backgroundColor: secondaryColor,
    borderRadius: 2,
    marginBottom: 50,
  },
  loginButtonText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    fontSize: 15,
  },
});
