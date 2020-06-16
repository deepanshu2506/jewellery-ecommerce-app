import React, { useCallback } from "react";
import { View, ToastAndroid } from "react-native";
import { Surface, Button, TouchableRipple } from "react-native-paper";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { primaryColor } from "../../appStyles";
import { post } from "../../resources/Requests";
import { generateInvoice } from "../../resources/endpoints";
const InvoiceEmail = ({ orderId }) => {
  const generateBill = useCallback(() => {
    ToastAndroid.showWithGravity(
      "invoice will be e-mailed to you shortly",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    post(generateInvoice, { orderId });
  });
  return (
    <Surface style={{ elevation: 4, marginVertical: 10 }}>
      <TouchableRipple onPress={generateBill}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <View style={{ flex: 1 }}>
            <Button
              icon={({ size, color }) => (
                <View style={{ width: size + 10 }}>
                  <Icon name="file-document" color={color} size={size + 10} />
                </View>
              )}
              contentStyle={{ alignSelf: "flex-start" }}
              labelStyle={{ fontSize: 15 }}
            >
              Get invoice as Email
            </Button>
          </View>
          <Icon
            name="chevron-right"
            size={28}
            color={primaryColor}
            style={{ width: 40 }}
          />
        </View>
      </TouchableRipple>
    </Surface>
  );
};

export default InvoiceEmail;
