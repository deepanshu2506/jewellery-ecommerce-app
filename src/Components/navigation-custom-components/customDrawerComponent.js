import React from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Drawer, IconButton, Avatar } from "react-native-paper";

import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import { primaryColor, secondaryColor } from "../../appStyles";
import { connect } from "react-redux";

const navigationHandler = (navigation, type) => () => {
  navigation.push("search", { search: type });
  navigation.closeDrawer();
};

const CustomDrawerComponent = (props) => {
  const { navigation, user } = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View
          style={{
            height: 120,
            backgroundColor: primaryColor,
            marginBottom: 10,
            paddingHorizontal: 0,
          }}
        >
          <IconButton
            style={{}}
            icon="keyboard-backspace"
            color="white"
            onPress={navigation.closeDrawer}
          />
          {user.username && (
            <View
              style={{
                flex: 1,
                paddingLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar.Text
                label={user.username[0].toUpperCase()}
                style={{ backgroundColor: secondaryColor, marginRight: 10 }}
                size={40}
                color="white"
              />
              <View>
                <Text style={{ color: "white", fontSize: 18 }}>
                  {user.username}
                </Text>
              </View>
            </View>
          )}
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Rings"
            onPress={navigationHandler(navigation, "ring")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="ring"
                color={secondaryColor}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
            activeTintColor={secondaryColor}
          />
          <DrawerItem
            label="Pendants"
            onPress={navigationHandler(navigation, "pendant")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="ring"
                color={secondaryColor}
                size={size}
                activeTintColor={secondaryColor}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Bracelets"
            onPress={navigationHandler(navigation, "bracelet")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="ring"
                color={secondaryColor}
                size={size}
                activeTintColor={secondaryColor}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
          <DrawerItem
            label="Earrings"
            onPress={navigationHandler(navigation, "earring")}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="ring"
                color={secondaryColor}
                size={size}
                activeTintColor={secondaryColor}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
          />
        </Drawer.Section>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Custom Jewellery"
            onPress={() => {
              navigation.push("search", { search: "rings" });
              navigation.closeDrawer();
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="image-filter-center-focus"
                color={secondaryColor}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
            activeTintColor={secondaryColor}
          />
          <DrawerItem
            label="My orders"
            onPress={() => {
              navigation.push("search", { search: "Pendants" });
              navigation.closeDrawer();
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="package-variant-closed"
                color={secondaryColor}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
            activeTintColor={secondaryColor}
          />

          <DrawerItem
            label="WishList"
            onPress={() => {
              navigation.push("wishlist");
              navigation.closeDrawer();
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                color={secondaryColor}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
            activeTintColor={secondaryColor}
          />

          <DrawerItem
            label="Contact Us"
            onPress={() => {
              navigation.push("search", { search: "Bracelets" });
              navigation.closeDrawer();
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="email-outline"
                color={secondaryColor}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
            activeTintColor={secondaryColor}
          />

          <DrawerItem
            label="Log Out"
            onPress={() => {
              props.logout();
              navigation.reset({
                index: 0,
                routes: [{ name: "login" }],
              });
            }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="logout"
                color={secondaryColor}
                size={size}
              />
            )}
            style={styles.navItem}
            labelStyle={styles.navText}
            activeTintColor={secondaryColor}
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
