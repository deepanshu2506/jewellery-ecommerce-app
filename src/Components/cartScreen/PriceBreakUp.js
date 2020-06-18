import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default class PriceBreakup extends Component {
  render() {
    const { subTotal, taxes, total } = this.props.prices;
    return (
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text style={styles.font}>PRICE BREAKUP</Text>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={styles.row}>
            <Text style={[styles.font, styles.header]}>SubTotal : </Text>
            <Text style={styles.font}>{`\u20b9 ${subTotal.toFixed(2)}`}</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={styles.row}>
            <Text style={[styles.font, styles.header]}>GST : </Text>
            <Text style={styles.font}>{`\u20b9 ${taxes.toFixed(2)}`}</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={styles.row}>
            <Text style={[styles.font, styles.header]}>Total : </Text>
            <Text
              style={[styles.font, { borderTopWidth: 2 }]}
            >{`\u20b9 ${total.toFixed(2)}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  font: { fontSize: 16 },
  header: { fontWeight: "bold" },
});
