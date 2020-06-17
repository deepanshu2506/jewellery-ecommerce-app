/**
 * todo:
 * 1. Dynamically generate the table rows from the props
 */

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import { DataTable, Divider } from "react-native-paper";

const screenWidth = Math.round(Dimensions.get("window").width);

export default class DetailsSwitcher extends Component {
  state = {
    swipeCurrentPage: 0,
  };

  _snapPage = (event) => {
    if (!event) return;

    const xOffset = event.nativeEvent.contentOffset.x + 10;

    const currentPage = Math.floor(xOffset / screenWidth);
    this.setState(
      (prevState) =>
        currentPage != prevState.swipeCurrentPage && {
          swipeCurrentPage: currentPage,
        }
    );
  };
  render() {
    return (
      <View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            //   borderWidth: 1,
            height: 40,
          }}
        >
          <TouchableNativeFeedback
            onPress={() => {
              this.descriptionSwitcher.scrollTo({ x: 0 });
            }}
          >
            <View
              style={[
                styles.descriptionSwitcherHeader,
                this.state.swipeCurrentPage == 0 && {
                  borderBottomColor: "#011627",
                },
              ]}
            >
              <Text>Product Information</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              this.descriptionSwitcher.scrollTo({
                x: screenWidth,
              });
            }}
          >
            <View
              style={[
                styles.descriptionSwitcherHeader,
                this.state.swipeCurrentPage == 1 && {
                  borderBottomColor: "#011627",
                },
              ]}
            >
              <Text> Price Breakup</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <ScrollView
          onScroll={this._snapPage}
          decelerationRate={10}
          snapToInterval={screenWidth}
          snapToAlignment={"center"}
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={(node) => (this.descriptionSwitcher = node)}
        >
          <View style={styles.card}>
            <DataTable style={{ alignContent: "center", marginBottom: 20 }}>
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
          </View>
          <View style={styles.card}>
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
                    {`Rs.${this.props.item.price.toFixed(2)}`}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth,
  },
  descriptionSwitcherHeader: {
    width: screenWidth / 2,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#bbb",
  },
  // tableHeaders: { justifyContent: "center" },
});
