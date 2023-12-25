import React from "react";
import { Text, View } from "react-native";
import { TopBar } from "../../components/common";
import Ionicons from "react-native-vector-icons/Ionicons";

const NotificationScreen= () => {
  return (
    <View className="px-5 mt-10">
      <TopBar title="Lotifications" isSearch={true}></TopBar>
      <View className="mt-5 ">
        <View className="flex border-blue-400 border mb-2 py-5 flex-row bg-white rounded-lg">
          <View className="flex items-center relative w-14">
            <Ionicons name="notifications-outline" size={30}></Ionicons>
            <View className="absolute w-2 h-2 right-5 top-1 bg-red-500 rounded-full"></View>
          </View>
          <View>
            <Text className="pr-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
              iure.
            </Text>
          </View>
        </View>
        <View className="flex mb-2 py-5 flex-row bg-white rounded-lg">
          <View className="flex items-center relative w-14">
            <Ionicons name="notifications-outline" size={30}></Ionicons>
            <View className="absolute w-2 h-2 right-5 top-1 bg-red-500 rounded-full"></View>
          </View>
          <View>
            <Text className="pr-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
              iure.
            </Text>
          </View>
        </View>
        <View className="flex mb-2 py-5 flex-row bg-white rounded-lg">
          <View className="flex items-center w-14">
            <Ionicons name="notifications-outline" size={30}></Ionicons>
          </View>
          <View>
            <Text className="pr-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
              iure.
            </Text>
          </View>
        </View>
        <View className="flex mb-2 py-5 flex-row bg-white rounded-lg">
          <View className="flex items-center w-14">
            <Ionicons name="notifications-outline" size={30}></Ionicons>
          </View>
          <View>
            <Text className="pr-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
              iure.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
