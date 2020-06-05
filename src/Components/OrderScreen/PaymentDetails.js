import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Surface, Divider } from "react-native-paper";
const PaymentDetails = ({ orderPrice }) => {
  return (
    <Surface style={styles.surface}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>PAYMENT DETAILS</Text>
      </View>
      <View style={styles.contentView}>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentTexthead}>Sub Total: </Text>
          <Text style={{ fontSize: 18 }}>{`Rs.${orderPrice}/-`}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.paymentTexthead}>Shipping Charges: </Text>
          <Text style={{ fontSize: 18, marginRight: 20 }}>Free</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.paymentRow}>
          <Text style={styles.paymentTexthead}>Grand Total: </Text>
          <Text style={{ fontSize: 18 }}>{`Rs.${orderPrice}/-`}</Text>
        </View>
      </View>
    </Surface>
  );
};
export default PaymentDetails;

const styles = StyleSheet.create({
  surface: { elevation: 4, marginVertical: 10 },
  headerView: { borderBottomColor: "#ddd", borderBottomWidth: 1 },
  headerText: { fontSize: 16, padding: 10, color: "#555" },
  contentView: { padding: 10, paddingHorizontal: 20 },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  paymentTexthead: { fontSize: 18, fontWeight: "bold" },
  divider: { height: 2, marginVertical: 10, marginBottom: 20 },
});
