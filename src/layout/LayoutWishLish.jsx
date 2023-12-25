import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonBack, Product, TopBar } from "../components/common";
import { getRequest } from "../api/request";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { setIsUser } from "../redux/slice/statusModal";

const LayoutWishList = () => {
  const { favAr } = useSelector((state) => state.favorite);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  React.useEffect(() => {
    if (!token) {
      dispatch(setIsUser(true));
    }
  }, [token]);
  return (
    <View className="h-full px-5 mt-10">
      <TopBar title="Wishlist"></TopBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row flex-wrap">
          {favAr.length > 0 &&
            favAr.map((item) => {
              return <Product layout={true} key={item.id} data={item} />;
            })}
          {favAr.length === 0 && (
            <View className="h-full w-full flex items-center justify-center">
              <Image
                resizeMode="contain"
                className=""
                source={require("../../assets/wishlistEmpty.png")}
              ></Image>
              <Text className="text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates eum maiores quam. Cupiditate sit culpa
              </Text>
              <Text className="text-2xl mt-5 font-bold  text-center">
                Wishlist is empty
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                className="rounded-full py-3 w-full bg-orange-400 mt-10"
              >
                <Text className="text-center text-white font-semibold text-base">
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default LayoutWishList;
