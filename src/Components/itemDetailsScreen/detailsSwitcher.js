/**
 * todo:
 * 1. Dynamically generate the table rows from the props
 */

import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { DataTable, Divider, Text } from "react-native-paper";

const screenWidth = Math.round(Dimensions.get("window").width);

export default class DetailsSwitcher extends Component {
  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17 }}>Product Information</Text>
        </View>
        <DataTable style={{ alignContent: "center" }}>
          <DataTable.Row>
            <DataTable.Cell>Weight</DataTable.Cell>
            <DataTable.Cell>{`${this.props.item.weight} g`}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Size</DataTable.Cell>
            <DataTable.Cell>{this.props.item.size}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Gender</DataTable.Cell>
            <DataTable.Cell>{this.props.item.sex}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text>Materials</Text>
          </View>
          <View style={{ flex: 1 }}>
            {this.props.item.materials.map((material) => (
              <Text>{`${material.materialType.name} - ${material.materialType.subtype}`}</Text>
            ))}
          </View>
        </View>

        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17 }}>Price Breakup</Text>
          </View>
          <DataTable theme={{ justifyContent: "center" }}>
            <DataTable.Header style={{ justifyContent: "center" }}>
              <DataTable.Title style={styles.tableHeaders}>
                COMPONENT
              </DataTable.Title>
              <DataTable.Title style={styles.tableHeaders}>
                RATE
              </DataTable.Title>
              <DataTable.Title style={styles.tableHeaders}>
                WEIGHT
              </DataTable.Title>
              <DataTable.Title style={styles.tableHeaders}>
                VALUE
              </DataTable.Title>
            </DataTable.Header>
            {this.props.item.materials.map((material) => (
              <DataTable.Row>
                <DataTable.Cell>{material.materialType.name}</DataTable.Cell>

                <DataTable.Cell>{`Rs.${material.materialType.price}`}</DataTable.Cell>
                <DataTable.Cell>{`${material.weight} g`}</DataTable.Cell>
                <DataTable.Cell>
                  {`Rs.${(
                    material.materialType.price * material.weight
                  ).toFixed(2)}`}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Row>
              <DataTable.Cell>Making</DataTable.Cell>
              <DataTable.Cell>{`Rs.${this.props.item.makingCharges}`}</DataTable.Cell>
              <DataTable.Cell>{`${this.props.item.weight} g`}</DataTable.Cell>
              <DataTable.Cell>{`Rs.${(
                this.props.item.makingCharges * this.props.item.weight
              ).toFixed(2)}`}</DataTable.Cell>
            </DataTable.Row>
            <Divider style={{ backgroundColor: "red" }} />
            <DataTable.Row>
              <DataTable.Cell></DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ fontWeight: "bold" }}>Sub Total</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                {" "}
                <Text style={{ fontWeight: "bold" }}>
                  {`Rs.${(+this.props.item.actualPrice).toFixed(2)}`}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
            {this.props.item.discount > 0 && (
              <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell>
                  <Text style={{ fontWeight: "bold" }}>(-)Discount</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ borderBottomWidth: 2 }}>
                  <Text style={{ fontWeight: "bold" }}>
                    {`Rs.${(
                      this.props.item.actualPrice *
                      (this.props.item.discount / 100)
                    ).toFixed(2)}`}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            )}
            <DataTable.Row style={{ marginBottom: 20 }}>
              <DataTable.Cell></DataTable.Cell>
              <DataTable.Cell></DataTable.Cell>
              <DataTable.Cell>
                <Text style={{ fontWeight: "bold" }}>Grand Total</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ borderBottomWidth: 2 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {`Rs.${this.props.item.price}`}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth,
  },
  // descriptionSwitcherHeader: {
  //   width: screenWidth / 2,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "100%",
  //   borderBottomWidth: 1,
  //   borderLeftWidth: 1,
  //   borderColor: "#bbb",
  // },
  // tableHeaders: { justifyContent: "center" },
});
