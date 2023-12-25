import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import TabRoutes from "./TabRoutes";
import { LayoutSingup } from "../layout";
import LayoutTellUs from "../layout/LayoutTellUs";
import ModalProductDetail from "../components/modal/ModalProductDetail";
import Toast from "react-native-toast-message";
import CheckLogin from "../components/modal/CheckLogin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/slice/authSlice";
import { getRequest } from "../api/request";
import CheckoutSuccess from "../screen/checkout/CheckoutSuccess";
import OrderDetail from "../screen/orderHistory/OrderDetail";
import OrderItem from "../screen/orderHistory/OrderItem";
import CartScreen from "../screen/cart";
import DetailProductScreen from "../screen/productDetail";
import CheckoutScreen from "../screen/checkout";
import LoginScreen from "../screen/login";
import NotificationScreen from "../screen/notifications";
import SearchScreen from "../screen/search";
import ForgotPassword from "../screen/forgotPassword";
import VerificationCode from "../screen/forgotPassword/VerificationCode";
import CreateNewPassword from "../screen/forgotPassword/CreateNewPassword";
import PaymentScreen from "../screen/payment";
import BlogScreen from "../screen/blog";
import BlogDetailScreen from "../screen/blogDetail";
const Stack = createNativeStackNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const fetch = async () => {
    const response2 = await getRequest(
      "/admin/auth/user",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setUser(response2));
  };
  const handleGet = async () => {
    await AsyncStorage.getItem("token").then((value) => {
      if (value) {
        dispatch(setToken(value));
      }
    });
  };
  useEffect(() => {
    handleGet();
  }, []);
  useEffect(() => {
    fetch();
  }, [token]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={TabRoutes} name={"TabHome"} />
        <Stack.Screen component={DetailProductScreen} name={"ProductDetails"} />
        <Stack.Screen component={LoginScreen} name={"Login"} />
        <Stack.Screen component={LayoutSingup} name={"Singup"} />
        <Stack.Screen component={LayoutTellUs} name={"LayoutTellUs"} />
        <Stack.Screen component={CartScreen} name={"Cart"} />
        <Stack.Screen component={SearchScreen} name={"Search"} />
        <Stack.Screen component={CheckoutScreen} name={"Checkout"} />
        <Stack.Screen component={CheckoutSuccess} name={"CheckoutSuccess"} />
        <Stack.Screen component={NotificationScreen} name={"Notifications"} />
        <Stack.Screen component={OrderDetail} name={"OrderDetail"} />
        <Stack.Screen component={OrderItem} name={"OrderItems"} />
        <Stack.Screen component={ForgotPassword} name={"ForgotPassword"} />
        <Stack.Screen component={VerificationCode} name={"VerificationCode"} />
        <Stack.Screen component={CreateNewPassword} name={"CreateNewPassword"} />
        <Stack.Screen component={PaymentScreen} name={"Payment"} />
        <Stack.Screen component={BlogScreen} name={"Blog"} />
        <Stack.Screen component={BlogDetailScreen} name={"BlogDetail"} />
      </Stack.Navigator>
      <ModalProductDetail></ModalProductDetail>
      <Toast></Toast>
      <CheckLogin></CheckLogin>
    </NavigationContainer>
  );
};

export default Routes;
