import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { formatPrice } from "../../../untils";

const DetailContent = ({ data }) => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center mx-5">
        <Text className="capitalize text-blue-500">{data.brand?.name}</Text>
        <Text className="text-red-400">
          <Icon name="star" size={18} color="#f5860f" /> 4.83 (321)
        </Text>
      </View>
      <Text className="text-xl mt-3 font-bold mx-5">{data.name}</Text>
      <Text className="mx-5 text-gray-400 mt-3">{data.description}</Text>
      <View className="flex flex-row justify-between mx-5 items-center mt-3">
        <Text className="text-red-500 font-bold text-2xl">{formatPrice(data?.price || 0)}</Text>
        <View className="flex items-center gap-4 flex-row">
          <View className="w-5 h-5 bg-red-500 rounded-full"></View>
          <View className="w-5 h-5 bg-black rounded-full"></View>
          <View className="w-5 h-5 bg-blue-500 rounded-full"></View>
        </View>
      </View>
      <View className=" mx-5 my-5">
        <Text className="font-bold text-base mb-3">Description Product</Text>
        <Text className="text-gray-600">{data.detail}</Text>
      </View>
      
    </View>
  );
};

export default DetailContent;
