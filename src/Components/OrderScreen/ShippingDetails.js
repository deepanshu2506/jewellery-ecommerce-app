import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Surface } from "react-native-paper";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { secondaryColor } from "../../appStyles";

const ShippingDetails = (props) => {
  return (
    <Surface style={styles.surface}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>SHIPPING DETAILS</Text>
      </View>
      <View style={styles.contentView}>
        <View style={styles.rowView}>
          <Icon
            name="map-marker"
            size={30}
            color={secondaryColor}
            style={{ paddingRight: 10 }}
          />
          <Text style={styles.rowText}>
            abcdabcd, efgh, ijkl, mumbai, maharashtra- 400022
          </Text>
        </View>
        <View style={styles.rowView}>
          <Icon
            name="city"
            size={30}
            color={secondaryColor}
            style={{ paddingRight: 10 }}
          />
          <Text style={styles.rowText}>Mumbai</Text>
        </View>
        <View style={styles.rowView}>
          <Icon
            name="earth"
            size={30}
            color={secondaryColor}
            style={{ paddingRight: 10 }}
          />
          <Text style={styles.rowText}>Maharashtra - 410210</Text>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: { elevation: 4, marginVertical: 10 },
  headerView: { borderBottomColor: "#ddd", borderBottomWidth: 1 },
  headerText: { fontSize: 16, padding: 10, color: "#555" },
  contentView: { paddingVertical: 10, paddingLeft: 20, paddingRight: 40 },
  rowView: { flexDirection: "row", marginVertical: 10 },
  rowText: { fontSize: 18, flexWrap: "wrap", flex: 1 },
});

export default ShippingDetails;
