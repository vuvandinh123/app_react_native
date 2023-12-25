import React from "react";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Banner = ({label,image,color}) => {
  return (
    <View>
      <View style={{ backgroundColor: color || "#97ff9e" }} className=" mt-5 p-5 rounded-lg">
        <View className="flex flex-row items-center justify-between">
          <View className="basis-1/2">
            <Text className="text-2xl text-white font-bold">
              {label}
            </Text>
            <Text className="text-white  font-bold mt-3">
              Shop now <Icon name="arrowright"></Icon>
            </Text>
          </View>
          <View className="basis-1/2 flex items-center">
            <Image className="" source={image}></Image>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;
