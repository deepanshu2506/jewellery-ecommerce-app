import React from "react";
import { Portal, Dialog, ActivityIndicator } from "react-native-paper";
import { primaryColor } from "../../appStyles";

const loaderDialog = ({ visible }) => {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Content>
          <ActivityIndicator
            size={50}
            animating={visible}
            color={primaryColor}
          />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default loaderDialog;
