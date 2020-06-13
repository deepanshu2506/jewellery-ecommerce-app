import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Constants from "expo-constants";
import { Surface, TextInput, Button } from "react-native-paper";

import Loader from "../Components/utility/LoaderDialog";
import { connect } from "react-redux";

import { signup } from "../redux/actions/userActions";

import { secondaryColor } from "../appStyles";

import VectorArt from "../res/signupArt.png";

class SignupScreen extends React.Component {
  state = {
    username: "",
    mobile: "",
    password: "",
    error: "",
    email: "",
    signUpSuccess: false,
    hideImg: false,
    currentInput: "",
  };

  componentDidMount() {
    Keyboard.addListener("keyboardDidShow", () => {
      this.setState({ hideImg: true });
    });
    Keyboard.addListener("keyboardDidHide", () => {
      this.setState({ hideImg: false });
    });
  }

  _validate = () => {
    const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    } else if (
      this.state.email.length == 0 ||
      !emailreg.test(this.state.email)
    ) {
      this.setState({ error: "Enter valid Email" });
      return false;
    }
    return true;
  };

  _signUp = () => {
    Keyboard.dismiss();
    if (this._validate()) {
      const { mobile, username, password, email } = this.state;
      this.props.signUp(mobile, username, password, email);
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
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Loader visible={this.props.user.loading} />
          {!this.state.hideImg && (
            <View style={styles.imgContainer}>
              <Image
                style={{ width: "100%", height: "100%", opacity: 0.8 }}
                source={VectorArt}
              />
            </View>
          )}
          <View>
            <TextInput
              mode="flat"
              label="Name"
              blurOnSubmit={false}
              value={this.state.username}
              onChangeText={(username) => {
                this.setState({ username: username.trim() });
              }}
              underlineColor="#3f3d56"
              style={{ backgroundColor: "white", marginHorizontal: 20 }}
              onSubmitEditing={(event) => {
                this.email.focus();
              }}
            />
            <TextInput
              mode="flat"
              label="email"
              keyboardType="email-address"
              blurOnSubmit={false}
              value={this.state.email}
              onChangeText={(email) => {
                this.setState({ email: email.trim() });
              }}
              underlineColor="#3f3d56"
              style={{ backgroundColor: "white", marginHorizontal: 20 }}
              ref={(input) => {
                this.email = input;
              }}
              onSubmitEditing={() => {
                this.mobile.focus();
              }}
            />
            <TextInput
              mode="flat"
              keyboardType="numeric"
              blurOnSubmit={false}
              label="Mobile Number"
              maxLength={10}
              underlineColor="#3f3d56"
              value={this.state.mobile}
              onChangeText={(mobile) => {
                this.setState({ mobile: mobile.trim() });
              }}
              onSubmitEditing={() => {
                this.password.focus();
              }}
              style={{ backgroundColor: "white", marginHorizontal: 20 }}
              ref={(input) => {
                this.mobile = input;
              }}
            />
            <TextInput
              mode="flat"
              label="password"
              blurOnSubmit={false}
              secureTextEntry
              underlineColor="#3f3d56"
              onSubmitEditing={this._signUp}
              value={this.state.password}
              onChangeText={(password) => {
                this.setState({ password: password.trim() });
              }}
              style={{ backgroundColor: "white", marginHorizontal: 20 }}
              ref={(input) => {
                this.password = input;
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "red" }}>{this.state.error}</Text>
          </View>
        </View>
        <View>
          <Button
            mode="contained"
            color={secondaryColor}
            labelStyle={styles.signUpButton}
            onPress={this._signUp}
          >
            Sign Up
          </Button>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (mobile, username, password, email) => {
    dispatch(signup(mobile, username, password, email));
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

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
  signUpButton: {
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
