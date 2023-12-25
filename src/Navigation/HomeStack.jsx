import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LayoutDetail, LayoutHome } from "../layout";
import HomeScreen from "../screen/home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"HomeStack"} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
