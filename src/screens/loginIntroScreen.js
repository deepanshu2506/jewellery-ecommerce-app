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
import { TouchableOpacity } from "react-native-gesture-handler";
import { secondaryColor } from "../appStyles";
import Loader from "../Components/utility/LoaderDialog";
import VectorArt from "../res/loginIntroArt.png";
import { connect } from "react-redux";
import { googleLogin, logout } from "../redux/actions/userActions";
import GoogleSignInButton from "../Components/utility/GoogleSignInButton";

class LoginIntroScreen extends React.Component {
  componentDidMount() {
    this.props.resetUser();
  }
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
          <GoogleSignInButton />
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
