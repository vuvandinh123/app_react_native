import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LoginToast from "../components/common/LoginToast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/slice/authSlice";
import { Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getRequest } from "../api/request";
import { useNavigation } from "@react-navigation/native";

const LayoutSetting = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { token, user } = useSelector((state) => state.auth);
  const handlePressLogout = () => {
    AsyncStorage.removeItem("token").then((token) => {
      Toast.show({
        type: "success",
        text1: "Token has been",
      });
      dispatch(removeToken());
    });
  };
  const handlePressAddress = () => {
    navigation.navigate("ScreenAddress");
  };
  if (!token) {
    return <LoginToast />;
  }
  return (
    <View className="h-full px-5 mt-10 ">
      <View className="text-3xl">
        <View className="items-center mt-10">
          <Image
            className="w-20 h-20 rounded-full"
            source={require("../../assets/dinh.jpg")}
          ></Image>
        </View>
        <View className="bg-gray-200 flex flex-row rounded-xl justify-between items-center mt-10 p-5">
          <View>
            <Text className=" font-medium  mb-1 text-base capitalize">
              {user?.firstName + " " + user?.lastName}
            </Text>
            <Text className="mb-1 text-gray-600">Email: {user?.email}</Text>
            <Text className="text-gray-600">Year old: 21 </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-blue-500 font-semibold">Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handlePressAddress}
          className="bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5"
        >
          <View>
            <Text className=" font-medium  mb-1 text-base capitalize">
              Address
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-black font-semibold">
                <AntDesign name="right" size={20}></AntDesign>
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Payment")} className="bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5">
          <View>
            <Text className=" font-medium  mb-1 text-base capitalize">
              Payment
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-black font-semibold">
                <AntDesign name="right" size={20}></AntDesign>
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("OrderHistory")} className="bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5">
          <View>
            <Text className=" font-medium  mb-1 text-base capitalize">
              Order History
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-black font-semibold">
                <AntDesign name="right" size={20}></AntDesign>
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View className="bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5">
          <View>
            <Text className=" font-medium  mb-1 text-base">FAQs</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-black font-semibold">
                <AntDesign name="right" size={20}></AntDesign>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-gray-200 flex flex-row rounded-lg justify-between items-center mt-3 p-5">
          <View>
            <Text className=" font-medium  mb-1 text-base">
              Change Password
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-black font-semibold">
                <AntDesign name="right" size={20}></AntDesign>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="bg-red-500 py-3 mt-7 px-5 rounded-full"
        onPress={handlePressLogout}
      >
        <Text className="text-white font-semibold capitalize text-center">
          sing out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LayoutSetting;
