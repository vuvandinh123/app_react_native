import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, Text } from "react-native";
import { View } from "react-native";
import Icon2 from "react-native-vector-icons/AntDesign";

const LoginToast = () => {
    const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Login");
  }
  return (
    <View className="my-10 px-5">
      <View className="flex flex-row items-center justify-between py-5 border-b border-[#dcdee2]">
        <View>
          <Text className="text-xl font-bold">Login Account</Text>
        </View>
        <View>
          <Text>
            <Icon2 name="close" size={25}></Icon2>
          </Text>
        </View>
      </View>
      <View className="flex mt-10 items-center justify-center">
        <Image source={require("../../../assets/image203png.png")}></Image>
      </View>
      <View>
        <Text className="text-base font-medium mt-10 text-center ">
          Anda perlu masuk terlebih dahulu
        </Text>
        <Text className="text-gray-400 mt-5 text-center leading-7">
          Silahkan login/ register telebih dahulu untuk melakukan transaksi
        </Text>
      </View>
      <View className="mt-10">
        <Button onPress={handlePress} title="Login" className="mt-10"></Button>
      </View>
    </View>
  );
};

export default LoginToast;
