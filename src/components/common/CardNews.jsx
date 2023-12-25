import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import image1 from "../../../assets/news/wp2599594.jpg";
import { AppURL } from "../../api/AppUrl";
import { useNavigation } from "@react-navigation/native";
const CardNews = ({ item }) => {
  const navigation = useNavigation();
  const handlePressBlogDetail = () => {
    navigation.navigate("BlogDetail", {
      slug: item.slug,
    });
  };
  return (
    <View className="bg-white mt-3 py-4 px-3 rounded-lg">
      <TouchableOpacity
        onPress={handlePressBlogDetail}
        className="flex flex-row "
      >
        <View className="basis-2/3">
          <Text className="text-[15px] h-[50px] overflow-hidden font-bold leading-6">
            {item.title}...
          </Text>
          <Text className="h-[40px] text-gray-500 overflow-hidden">
            {item.compact}...
          </Text>
          <Text className="text-gray-400 mt-2 text-[12px]">13 Jan 2021</Text>
        </View>
        <View className="basis-1/3 flex items-center justify-center">
          <Image
            className="w-[100px] max-w-full  h-[100px]  rounded-lg"
            resizeMode="contain"
            source={{ uri: `${AppURL.ImageUrl}${item.image}` }}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardNews;
