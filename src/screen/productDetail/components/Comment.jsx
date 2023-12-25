import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const Comment = () => {
  return (
    <View className=" mx-5 my-5 pb-16">
      <View className="flex flex-row mb-5 justify-between items-center">
        <Text className="text-base font-bold">Review (86)</Text>
        <Text className="text-red-500">
          <Icon name="star" size={18} color="#f5860f" /> 4.8{" "}
        </Text>
      </View>
      {[1, 2, 3].map((item, index) => (
        <View key={index} className="flex flex-row  items-start mt-3">
          <View className="w-10 mr-4 flex-shrink-0 h-10">
            <Image
              resizeMode="contain"
              className="w-full h-full rounded-full"
              source={require("../../../../assets/dinh.jpg")}
            ></Image>
          </View>
          <View className="basis-5/6">
            <View className="flex flex-row justify-between items-center">
              <Text className="capitalize font-medium">Vu van dinh</Text>
              <Text className="text-gray-400 text-[12px]">13 Jan 2021</Text>
            </View>
            <View className="flex flex-row items-center gap-1 mt-1">
              <Icon name="star" size={14} color="#fba142"></Icon>
              <Icon name="star" size={14} color="#fba142"></Icon>
              <Icon name="star" size={14} color="#fba142"></Icon>
              <Icon name="star" size={14} color="#fba142"></Icon>
              <Icon name="staro" size={14} color="#fba142"></Icon>
            </View>
            <View className="mt-2 ">
              <Text className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis quia atque, et dolorum dolores eos illum adipisci
                nihil?
              </Text>
            </View>
          </View>
        </View>
      ))}
      <TouchableOpacity className="w-full  mt-4">
        <Text className="capitalize text-center text-blue-300 mt-3 py-3">see more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comment;
