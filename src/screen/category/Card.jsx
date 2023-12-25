import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppURL } from "../../api/AppUrl";
import { useNavigation } from "@react-navigation/native";

const Card = ({item}) => {
  const navigation = useNavigation();
  const qty = Math.floor(Math.random() * (100 - 1) + 1);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductByCategry", {
          id: item.id,
          name: item.name,
        })
      }
      className="basis-1/2 p-1"
    >
      <View className="bg-white  rounded-xl overflow-hidden p-2">
        <View>
          <Image
            className="w-full h-[150px] "
            resizeMode="cover"
            source={{ uri: `${AppURL.ImageUrl}${item.image}` }}
          ></Image>
        </View>
        <View className="flex justify-between  items-center">
          <Text className="font-bold mt-2 mb-2">{item.name}</Text>
          <Text className="text-[12px]">
            <Text className="text-red-500">{qty}</Text> Products
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
