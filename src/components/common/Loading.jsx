import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";

const Loading = () => {
  return (
    <View className="h-[100vh] absolute inset-0 w-[100vw] z-50 bg-[#fff]">
      <View className="flex  relative justify-center items-center h-full">
        <Image
          className="w-48 "
          resizeMode="contain"
          source={require("../../../assets/zyro-image.png")}
        ></Image>
        <View className="absolute bottom-[30%]">
          <Image
            className="w-10"
            resizeMode="contain"
            source={require("../../../assets/loading.gif")}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default Loading;
