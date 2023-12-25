import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import  CartItem from "./CartItem";
import  CartPrice from "./CartPrice";
import  CartEmpty from "./CartEmpty";
import { TopBar } from "../../components/common";
import { setCartList } from "../../redux/slice/cartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const handlePressRemoveAll = () => {
    dispatch(setCartList([]));
  };
  const { cartAr } = useSelector((state) => state.cart);
  const total = cartAr?.reduce((a, b) => a + b.total, 0);
  return (
    <View className="h-full px-5 mt-14">
      <TopBar title="Cart" />
      <View className={`mt-10 ${cartAr?.length === 0 && "hidden"}`}>
        <View className="flex flex-row justify-between">
          <Text>{cartAr?.length} Items</Text>
          <TouchableOpacity onPress={handlePressRemoveAll}>
            <Text className="text-gray-600 font-medium text-right">
              Remove All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="w-full h-[53vh] mt-5 ">
          {cartAr?.map((item, index) => (
            <CartItem key={index} item={item}></CartItem>
          ))}
        </ScrollView>
        <CartPrice total={total}/>
      </View>
      <CartEmpty isCart={cartAr?.length != 0} />
    </View>
  );
};

export default CartScreen;
