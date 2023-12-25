import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CartPrice = ({ total }) => {
  const navigation = useNavigation();
  const handlePressCheckout = () => {
    navigation.navigate("Checkout", { prev: "Cart" });
  };
  return (
    <View className="mt-10">
      <View className="flex mb-3 flex-row justify-between">
        <Text className="font-bold text-gray-500">Subtotal</Text>
        <Text className="font-bold">${total}</Text>
      </View>
      <View className="flex mb-3 flex-row justify-between">
        <Text className="font-bold text-gray-500">Shipping Cost</Text>
        <Text className="font-bold">$3.00</Text>
      </View>
      <View className="flex mb-3 flex-row justify-between">
        <Text className="font-bold text-gray-500">Tax</Text>
        <Text className="font-bold">$0.00</Text>
      </View>
      <View className="flex mb-3 flex-row justify-between">
        <Text className="font-bold text-gray-500">Total</Text>
        <Text className="font-semibold text-xl">${total + 3}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={handlePressCheckout}
          className="rounded-full bg-blue-500 py-3 mt-3 border-gray-100"
        >
          <Text className="text-center text-white font-semibold text-base">
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartPrice;
