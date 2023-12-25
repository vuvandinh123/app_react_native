import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { ModalProduct } from "../common";

const ModalProductDetail = () => {
  const { isOpen } = useSelector((state) => state.statusModal);
  return (
    isOpen && (
      <View className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000af] px-5">
        <ModalProduct></ModalProduct>
      </View>
    )
  ); 
};

export default ModalProductDetail;
