import React from "react";
import { View, Text, StyleSheet, Image, Keyboard } from "react-native";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";

import VectorArt from "../res/loginVector.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import Loader from "../Components/utility/LoaderDialog";

import { secondaryColor } from "../appStyles";

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
  _login = () => {
    Keyboard.dismiss();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Loader visible={this.props.user.loading} />
        <View style={{ flex: 1, justifyContent: "center" }}>
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
              blurOnSubmit={false}
              value={this.state.username}
              style={{ backgroundColor: "white", marginHorizontal: 20 }}
              onChangeText={(text) => {
                this.setState({ username: text });
              }}
              onSubmitEditing={() => this.password.focus()}
            />
            <TextInput
              mode="flat"
              label="password"
              blurOnSubmit={false}
              secureTextEntry
              value={this.state.password}
              returnKeyType="next"
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              ref={(input) => {
                this.password = input;
              }}
              onSubmitEditing={this._login}
              returnKeyType="go"
              underlineColor="#3f3d56"
              style={{ backgroundColor: "white", marginHorizontal: 20 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
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
            <Text style={{ color: "red", fontSize: 15, marginTop: 10 }}>
              {this.props.user.error}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}></View>
        </View>
        <Button
          mode="contained"
          color={secondaryColor}
          labelStyle={{ color: "white", paddingVertical: 5 }}
          onPress={this._login}
        >
          Log in
        </Button>
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
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  imgContainer: {
    width: "75%",
    height: 190,
    marginBottom: 20,
    alignSelf: "center",
  },
});
