import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import Constants from "expo-constants";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";
import { Surface } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { secondaryColor } from "../appStyles";
import { GOOGLE_LOGIN_WEB_CLIENT_ID as WebClientID } from "../../env.json";
import Loader from "../Components/utility/LoaderDialog";
import VectorArt from "../res/loginIntroArt.png";
import GoogleLogo from "../res/googleLogo.png";
import { connect } from "react-redux";
import { googleLogin, logout } from "../redux/actions/userActions";

class LoginIntroScreen extends React.Component {
  componentDidMount() {
    this.props.resetUser();
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
  componentDidUpdate(prevProps) {
    if (this.props.user.code) {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "Drawer" }],
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Loader visible={this.props.user.loading} />
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
          <TouchableNativeFeedback onPress={this.signIn}>
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
  },
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

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => {
    dispatch(googleLogin(user));
  },
  resetUser: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginIntroScreen);
