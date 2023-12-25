import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppURL } from "../../api/AppUrl";
import Icon2 from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { minusToCart, plusToCart } from "../../redux/slice/cartSlice";

const CartItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePressMinus = (id) => {
    dispatch(minusToCart(id));
  };
  const handlePressPlus = (id) => {
    dispatch(plusToCart(id));
  };

  return (
    <View className="rounded-lg mb-3 bg-white overflow-hidden ">
      <View>
        <View className=" flex flex-row p-2 rounded-md">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", {
                slug: item?.slug,
              })
            }
          >
            <Image
              resizeMode="contain"
              className="rounded-lg  "
              width={80}
              height={80}
              source={{
                uri: `${AppURL.ImageUrl}${item?.image_url}`,
              }}
            />
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              className="w-[80%] font-bold"
              onPress={() =>
                navigation.navigate("ProductDetails", {
                  slug: item?.slug,
                })
              }
            >
              <Text>{item?.name}</Text>
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="font-bold text-base  text-red-500 mb-3">
                ${item?.price}
              </Text>
              <View className="flex flex-row items-center gap-x-2">
                <TouchableOpacity
                  onPress={() => handlePressMinus(item?.id)}
                  className="bg-[#f5f5f5] w-8 h-8 rounded-full flex justify-center items-center"
                >
                  <Icon2 name="minus" size={20} color={"red"}></Icon2>
                </TouchableOpacity>
                <Text>{item?.qty}</Text>
                <TouchableOpacity
                  onPress={() => handlePressPlus(item?.id)}
                  className="bg-[#f5f5f5] w-8 h-8 flex justify-center items-center rounded-full"
                >
                  <Icon2 name="plus" size={20} color={"red"}></Icon2>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
