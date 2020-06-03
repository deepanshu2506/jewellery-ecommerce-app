import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Constants from "expo-constants";
import { Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loader from "../Components/utility/LoaderDialog";
import { primaryColor, secondaryColor } from "../appStyles";

import VectorArt from "../res/loginIntroArt.png";
import GoogleLogo from "../res/googleLogo.png";

class LoginIntroScreen extends React.Component {
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
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#ffffff")}
            onPress={() => {
              this.props.navigation.navigate("login-screen");
            }}
          >
            <Surface style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login To Your Account</Text>
            </Surface>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Surface style={[styles.loginButton, styles.googleLoginButton]}>
              <Image source={GoogleLogo} style={{ height: 22, width: 22 }} />
              <Text
                style={[styles.loginButtonText, styles.googleLoginButtonText]}
              >
                Connect With Google
              </Text>
            </Surface>
          </TouchableNativeFeedback>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => {
              this.props.navigation.navigate("signup-screen");
            }}
          >
            <Text
              style={{
                marginTop: 20,
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              Sign up here
            </Text>
          </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "space-around",
  },
  imgContainer: {
    width: "100%",
    height: 400,
    // marginBottom: 130,
  },
  loginButton: {
    // borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 40,
    marginTop: 20,
    elevation: 3,
    backgroundColor: secondaryColor,
    borderRadius: 2,
  },
  loginButtonText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    fontSize: 15,
  },
  googleLoginButton: {
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "row",
  },
  googleLoginButtonText: { color: "#333", marginLeft: 10 },
});

export default LoginIntroScreen;
