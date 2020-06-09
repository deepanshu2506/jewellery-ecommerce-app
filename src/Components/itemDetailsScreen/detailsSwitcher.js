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
import { DataTable } from "react-native-paper";

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
                  DISCOUNT
                </DataTable.Title>
                <DataTable.Title style={styles.tableHeaders}>
                  VALUE
                </DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>Gold</DataTable.Cell>
                <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                <DataTable.Cell>5.63 gms</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>18201.25</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gold</DataTable.Cell>
                <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                <DataTable.Cell>5.63 gms</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>18201.25</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gold</DataTable.Cell>
                <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                <DataTable.Cell>5.63 gms</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>18201.25</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gold</DataTable.Cell>
                <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                <DataTable.Cell>5.63 gms</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>18201.25</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Gold</DataTable.Cell>
                <DataTable.Cell>Rs.3433.00</DataTable.Cell>
                <DataTable.Cell>5.63 gms</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>18201.25</DataTable.Cell>
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
  tableHeaders: { justifyContent: "center" },
});
