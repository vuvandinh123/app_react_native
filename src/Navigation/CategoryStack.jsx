import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screen/category";
import ProductByCategryScreen from "../screen/productByCategory";

const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"CategoryStack"} component={CategoryScreen} />
      <Stack.Screen
        name={"ProductByCategry"}
        component={ProductByCategryScreen}
      />
    </Stack.Navigator>
  );
};

export default CategoryStack;
