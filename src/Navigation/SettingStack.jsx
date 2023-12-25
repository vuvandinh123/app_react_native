import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LayoutDetail, LayoutHome, LayoutSetting } from "../layout";
import { AddAddress, ScreenAddress } from "../screen/address";
import OrderHistoryScreen from "../screen/orderHistory";

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"SettingStack"} component={LayoutSetting} />
      <Stack.Screen name={"ScreenAddress"} component={ScreenAddress} />
      <Stack.Screen name={"AddAddress"} component={AddAddress} />
      <Stack.Screen name={"OrderHistory"} component={OrderHistoryScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
