import React from "react";
import { StyleSheet } from "react-native";
import { Portal, Dialog, RadioButton } from "react-native-paper";

const SortDialog = (props) => {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.onDismiss}>
        <Dialog.Title>Sort</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group
            onValueChange={(value) => {
              props.onSortSelect(value);
              props.onDismiss();
            }}
            value={props.currentType}
          >
            {Object.getOwnPropertyNames(props.options).map((key, index) => (
              <RadioButton.Item
                label={props.options[key]}
                style={styles.sortDialogRadioButtonView}
                labelStyle={{ marginLeft: 10, fontSize: 18 }}
                value={props.options[key]}
                status={props.currentType === index ? "checked" : "unchecked"}
                theme={{ color: "black" }}
              />
            ))}
          </RadioButton.Group>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  sortDialogRadioButtonView: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
});

export default SortDialog;
