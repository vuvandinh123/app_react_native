import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LayoutDetail, LayoutHome, LayoutSetting } from "../layout";

const Stack = createNativeStackNavigator();

const UserStack = () => {
    
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"UserStack"} component={LayoutSetting} />
    </Stack.Navigator>
  );
};

export default UserStack;
