import React from "react";
import { View } from "react-native";
import { Text, IconButton, TouchableRipple } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { primaryColor, secondaryColor } from "../../appStyles";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { deleteHistoryItem } from "../../redux/actions/searchResultsActions";

const SearchHistoryComponent = ({ keyword, search, removeFromHistory }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
      }}
    >
      <TouchableRipple
        rippleColor="black"
        style={{
          flexDirection: "row",
          alignItems: "center",

          flex: 1,
        }}
        borderless={true}
        onPress={() => {
          search(keyword);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            flex: 1,
          }}
        >
          <MaterialCommunityIcons
            style={{ margin: 10 }}
            name="history"
            size={30}
            color={primaryColor}
          />
          <Text style={{ fontSize: 17 }}>{keyword}</Text>
        </View>
      </TouchableRipple>
      <IconButton
        icon="delete-outline"
        color={secondaryColor}
        onPress={() => {
          removeFromHistory(keyword);
        }}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromHistory: (item) => {
    dispatch(deleteHistoryItem(item));
  },
});

export default connect(null, mapDispatchToProps)(SearchHistoryComponent);
