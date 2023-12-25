import React, { useEffect, useState } from "react";
import { Share, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, byToCart } from "../../redux/slice/cartSlice";
import { removeStatus, setIsUser } from "../../redux/slice/statusModal";
import Toast from "react-native-toast-message";
import { DeleteFav, byToFav } from "../../redux/slice/favoriteSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ModalProduct = () => {
  const { data } = useSelector((state) => state.statusModal);
  const { favAr } = useSelector((state) => state.favorite);
  const { cartAr } = useSelector((state) => state.cart);
  const {token} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const handlePressAddToCart = () => {
    if (!token) {
      dispatch(setIsUser(true));
      dispatch(removeStatus());
      return;
    }
    if (checkCart(data.id)) {
      dispatch(DeleteCart(data.id));
      dispatch(removeStatus());
      Toast.show({
        type: "success",
        text1: "Remove To Cart Success",
      });
      return;
    }
    dispatch(byToCart(data));
    dispatch(removeStatus());
    Toast.show({
      type: "success",
      text1: "Add To Cart Success",
    });
  };
  const checkCart = (id) => {
    const isCart = cartAr.find((e) => e.id === id);
    if (!isCart) {
      return false;
    }
    return true;
  };
  const checkWishList = (id) => {
    const isFav = favAr.find((e) => e.id === id);
    if (!isFav) {
      return false;
    }
    return true;
  };
  const handlePressClose = () => {
    dispatch(removeStatus());
  };
  const handlePressAddToWishList = () => {
    if (!token) {
      dispatch(setIsUser(true));
      dispatch(removeStatus());
      return;
    }
    if (checkWishList(data.id)) {
      dispatch(DeleteFav(data.id));
      dispatch(removeStatus());
      Toast.show({
        type: "success",
        text1: "Remove To WishList Success",
      });
      return;
    }
    dispatch(byToFav(data));
    dispatch(removeStatus());
    Toast.show({
      type: "success",
      text1: "Add To WishList Success",
    });
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "React Native Framework",
        title: "React Native",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View className="absolute p-2 right-5 top-1/3 pb-5 border border-yellow-300 left-5  bg-white rounded-lg">
      <View className="flex flex-row border-b border-gray-300 p-5 items-center justify-between">
        <Text className="font-bold text-lg">Product Action</Text>
        <TouchableOpacity onPress={handlePressClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <View className="px-2">
        <TouchableOpacity
          onPress={handlePressAddToWishList}
          className="border-b p-5 border-gray-100"
        >
          <Text
            className={`${
              checkWishList(data.id) ? "text-red-500" : ""
            } font-medium`}
          >
            {checkWishList(data.id) ? "Remove To WishList" : "Add To WishList"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShare}
          className="border-b p-5 border-gray-100"
        >
          <Text className="font-medium">Share Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressAddToCart}
          className={`${
            checkCart(data.id) ? "bg-red-500" : "bg-blue-500 "
          } rounded-full py-3 mt-3 border-gray-100`}
        >
          <Text className="text-center text-white font-semibold text-base">
            {checkCart(data.id) ? "Remove To Cart" : "Add To Cart"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalProduct;
