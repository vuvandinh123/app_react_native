import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import ButtonBack from "./ButtonBack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title, isSearch }) => {
  const navigation = useNavigation();
  return (
    <View className="border-b border-gray-200 pb-4">
      <View className="flex items-center justify-between  relative flex-row ">
        <ButtonBack onPress={() => navigation.goBack()}></ButtonBack>
        <Text className="font-bold capitalize   text-2xl">{title}</Text>
        <View>
          {!isSearch && (
            <TouchableOpacity
              className="rounded-full bg-[#e4e4e4] w-10 h-10 flex justify-center items-center"
              onPress={() => navigation.navigate("Search")}
            >
              <Ionicons
                name="search-outline"
                size={24}
                color="black"
              ></Ionicons>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default TopBar;
