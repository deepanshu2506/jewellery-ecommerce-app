import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Drawer, IconButton, Avatar } from "react-native-paper";

import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const CustomDrawerComponent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View
          style={{
            height: 120,
            backgroundColor: "#ffa600",
            marginBottom: 10,
            paddingHorizontal: 0,
          }}
        >
          <IconButton
            style={{}}
            icon="keyboard-backspace"
            onPress={navigation.closeDrawer}
          />
          <View
            style={{
              justifyContent: "flex-end",
              flex: 1,
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          >
            <Avatar.Text
              label="DV"
              style={{ backgroundColor: "black" }}
              size={40}
            />
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Rings"
            onPress={() => {
              navigation.push("Home", { search: "rings" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="ring" color={color} size={size} />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Pendants"
            onPress={() => {
              navigation.push("Home", { search: "Pendants" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="ring" color={color} size={size} />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Bracelets"
            onPress={() => {
              navigation.push("Home", { search: "Bracelets" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="ring" color={color} size={size} />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="jewellery"
            onPress={() => {
              navigation.push("Home", { search: "jewellery" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="ring" color={color} size={size} />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Custom Jewellery"
            onPress={() => {
              navigation.push("Home", { search: "rings" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="image-filter-center-focus"
                color={color}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="My orders"
            onPress={() => {
              navigation.push("Home", { search: "Pendants" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="package-variant-closed"
                color={color}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Contact Us"
            onPress={() => {
              navigation.push("Home", { search: "Bracelets" });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="email-outline"
                color={color}
                size={size}
              />
            )}
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
    // paddingLeft: 20,
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
    marginTop: 5,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawerComponent;
