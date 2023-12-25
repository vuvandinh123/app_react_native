import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartEmpty = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View className={`mt-10  ${isCart && "!hidden"}`}>
      <View className="flex items-center justify-center">
        <Image source={require("../../../assets/parcel1.png")}></Image>
      </View>
      <View className="mt-5">
        <Text className="  text-xl text-center">Your cart is empty</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="rounded-full py-3 bg-orange-400 mt-10"
      >
        <Text className="text-center text-white font-semibold text-base">
          Continue Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartEmpty;
