import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

const CheckoutSuccess = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  const handlePressOrderDetail = () => {
    const data2 = {
      id: data.data.id,
      count: data.countProduct,
      email: data.data.email,
      phone: data.data.phone,
      address: data.data.address,
      note: data.data.note,
    };
    navigation.navigate("OrderDetail", { ...data2 });
  };
  return (
    <View className="px-5 mt-10 relative h-full bg-purple-400">
      <Image
        className="-top-52 w-full "
        resizeMode="contain"
        source={require("../../../assets/checkouSuccess.png")}
      ></Image>
      <View className="absolute px-5 bg-white h-[50vh] left-0 flex items-center right-0 bottom-0 rounded-t-3xl">
        <Text className="text-center font-semibold mt-5 w-2/3 leading-8 text-3xl">
          Order Placed Successfully
        </Text>
        <Text className="text-gray-500 mt-5">
          You will recieve an email confirmation
        </Text>
        <TouchableOpacity
          onPress={handlePressOrderDetail}
          className="py-4 mt-14 bg-purple-500 w-full rounded-full"
        >
          <Text className="text-white font-semibold text-base text-center ">
            See Order Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutSuccess;
