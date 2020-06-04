import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Surface } from "react-native-paper";

const ProductDetails = (props) => {
  return (
    <Surface style={styles.surface}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>PRODUCTS</Text>
      </View>
      <View>
        <View style={styles.productRow}>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Mesh Cluster Ring For Men</Text>
            <Text>
              Size:
              <Text>12</Text>
            </Text>
            <Text>
              Quantity:
              <Text>1</Text>
            </Text>
            <Text style={{ fontSize: 19 }}>
              Price: <Text>Rs. 15813/-</Text>
            </Text>
          </View>
          <View style={styles.productImageView}>
            <View style={{ width: 120, height: 120 }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                source={{
                  uri:
                    "https://cdn.caratlane.com/media/catalog/product/J/R/JR04526-WYP900_1_lar.jpg",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: { elevation: 4, marginVertical: 10 },
  headerView: { borderBottomColor: "#ddd", borderBottomWidth: 1 },
  headerText: { fontSize: 16, padding: 10, color: "#555" },
  productRow: {
    flexDirection: "row",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  productDetails: {
    width: "70%",
    justifyContent: "center",
    padding: 5,
    paddingLeft: 20,
  },
  productName: { fontSize: 20 },
  productImageView: {
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
});

export default ProductDetails;
