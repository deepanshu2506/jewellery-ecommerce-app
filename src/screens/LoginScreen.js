import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { Surface, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import VectorArt from "../res/loginVector.png";
import GoogleLogo from "../res/googleLogo.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loader from "../Components/utility/LoaderDialog";

import { primaryColor, secondaryColor } from "../appStyles";

import { requestLogin } from "../redux/actions/userActions";

class LoginScreen extends React.Component {
  state = { username: "", password: "" };

  componentDidUpdate(prevProps) {
    if (this.props.user.code) {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: "Drawer" }],
      });
    }
  }

  render() {
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <Loader visible={this.props.user.loading} />
        <View style={styles.imgContainer}>
          <Image
            style={{ width: "100%", height: "100%", opacity: 0.5 }}
            source={VectorArt}
          />
        </View>
        <View>
          <TextInput
            mode="flat"
            label="User name"
            underlineColor="#3f3d56"
            value={this.state.username}
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
            onChangeText={(text) => {
              this.setState({ username: text });
            }}
          />
          <TextInput
            mode="flat"
            label="password"
            secureTextEntry
            value={this.state.password}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            underlineColor="#3f3d56"
            style={{ backgroundColor: "white", marginHorizontal: 20 }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 15 }}>
            {this.props.user.error}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#ffffff")}
            onPress={() => {
              this.props.login(this.state.username, this.state.password);
            }}
          >
            <Surface style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </Surface>
          </TouchableNativeFeedback>

          <TouchableOpacity>
            <Text
              style={{
                marginTop: 20,
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(requestLogin(username, password));
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
  },
  loginButtonText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    fontSize: 15,
  },
});
