import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, TouchableRipple } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MAXHIDDENLENGTH = 20;

export default class DescriptionView extends React.Component {
  state = { readEntrireDescription: false };
  render() {
    return (
      <View
        style={{
          margin: 10,
          borderTopWidth: 1,
          paddingTop: 10,

          borderColor: "#ddd",
        }}
      >
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Description</Text>
        <View>
          {this.props.description.length > MAXHIDDENLENGTH ? (
            <TouchableRipple
              onPress={() =>
                this.setState((prevState) => ({
                  readEntrireDescription: !prevState.readEntrireDescription,
                }))
              }
            >
              <View>
                <Text style={styles.description}>
                  {this.state.readEntrireDescription
                    ? this.props.description
                    : `${this.props.description.substring(
                        0,
                        MAXHIDDENLENGTH
                      )} ...`}
                </Text>
              </View>
            </TouchableRipple>
          ) : (
            <View>
              <Text style={styles.description}>{this.props.description}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: { padding: 10, borderWidth: 1, borderColor: "#ddd" },
});
