import React, { Component } from "react";
import { StyleSheet, TouchableNativeFeedback, Image } from "react-native";
import { Surface, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import GoogleLogo from "../../res/googleLogo.png";
import { secondaryColor } from "../../appStyles";
import { connect } from "react-redux";
import { GOOGLE_LOGIN_WEB_CLIENT_ID as WebClientID } from "../../../env.json";
import { googleLogin, logout } from "../../redux/actions/userActions";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";

class GoogleSignInButton extends Component {
  componentDidMount() {
    GoogleSignin.configure({
      webClientId: WebClientID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      accountName: "", // [Android] specifies an account name on the device that should be used
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log(WebClientID);
      const userInfo = await GoogleSignin.signIn();
      const payload = {
        email: userInfo.user.email,
        name: userInfo.user.name,
        profilePhoto: userInfo.user.photo,
      };
      console.log(payload);
      this.props.signIn(payload);
      // const res = await post(googleLoginApi, payload);
      // console.log("abcd");
      // console.log(res);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert("SIGN_IN_CANCELLED");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        Alert("IN_PROGRESS");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Alert("PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        Alert(error);
      }
    }
  };

  render() {
    return (
      <TouchableNativeFeedback onPress={this.signIn}>
        <Surface style={[styles.loginButton, styles.googleLoginButton]}>
          <Image source={GoogleLogo} style={{ height: 22, width: 22 }} />
          <Text style={[styles.loginButtonText, styles.googleLoginButtonText]}>
            Connect With Google
          </Text>
        </Surface>
      </TouchableNativeFeedback>
    );
  }
}
const navWrappedButton = (props) => {
  const navigation = useNavigation();
  return <GoogleSignInButton {...props} navigation={navigation} />;
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => {
    dispatch(googleLogin(user));
  },
  resetUser: () => {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(navWrappedButton);

const styles = StyleSheet.create({
  loginButton: {
    paddingVertical: 13,
    width: 330,
    marginTop: 20,
    elevation: 3,
    backgroundColor: secondaryColor,
    borderRadius: 2,
    alignItems: "center",
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
