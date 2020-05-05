import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Drawer } from "react-native-paper";

import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const CustomDrawerComponent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View
          style={{ height: 100, backgroundColor: "black", marginBottom: 20 }}
        ></View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Rings"
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Pendants"
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Bracelets"
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="jewellery"
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  navItem: {
    paddingLeft: 20,
  },
  navText: { fontSize: 17 },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawerComponent;
