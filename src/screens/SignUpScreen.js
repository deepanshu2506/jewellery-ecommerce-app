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

import Loader from "../Components/utility/LoaderDialog";
import { connect } from "react-redux";

import { signup } from "../redux/actions/userActions";

import { secondaryColor } from "../appStyles";

import VectorArt from "../res/signupArt.png";

class LoginIntroScreen extends React.Component {
  state = { username: "", mobile: "", password: "", error: "" };

  _validate = () => {
    if (this.state.username.length < 3) {
      this.setState({
        error: "username should be atleast 3 characters long",
      });
      return false;
    } else if (this.state.mobile.length != 10) {
      this.setState({ error: "Enter valid mobile number" });
      return false;
    } else if (this.state.password.length == 0) {
      this.setState({ error: "password is required" });
      return false;
    }
    return true;
  };

  _signUp = () => {
    if (this._validate()) {
      const { mobile, username, password } = this.state;
      this.props.signUp(mobile, username, password);
    }
  };

  componentDidUpdate(prevProps) {
    console.log(this.props.user);
    if (this.props.user.isSignupSuccess == 1) {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "login" }],
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user.err) {
      return { error: props.user.err };
    }
    return null;
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
          <TextInput
            mode="flat"
            label="Name"
            value={this.state.username}
            onChangeText={(username) => {
              this.setState({ username: username.trim() });
            }}
            underlineColor="#3f3d56"
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
          <TextInput
            mode="flat"
            keyboardType="numeric"
            label="Mobile Number"
            underlineColor="#3f3d56"
            value={this.state.mobile}
            onChangeText={(mobile) => {
              this.setState({ mobile: mobile.trim() });
            }}
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
          <TextInput
            mode="flat"
            label="password"
            secureTextEntry
            underlineColor="#3f3d56"
            value={this.state.password}
            onChangeText={(password) => {
              this.setState({ password: password.trim() });
            }}
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "red" }}>{this.state.error}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#ffffff")}
            onPress={this._signUp}
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

const mapDispatchToProps = (dispatch) => ({
  signUp: (mobile, username, password) => {
    dispatch(signup(mobile, username, password));
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginIntroScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  imgContainer: {
    width: "75%",
    height: 190,
    alignSelf: "center",
  },
  loginButton: {
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
