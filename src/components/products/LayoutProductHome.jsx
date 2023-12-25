import React from "react";
import { Button, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Product from "../common/Product";
import { useNavigation } from "@react-navigation/native";

const LayoutProductHome = ({ data, label, handleToTop, seeAll }) => {
  const navigation = useNavigation();
  return (
    <View className="">
      <View className="flex mt-5 items-center flex-row justify-between">
        <Text className="text-xl font-bold">{label}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(seeAll || "Home")}
          className="text-blue-600"
        >
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <View className="my-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className=""
        >
          {data &&
            data?.map((item) => (
              <Product handleToTop={handleToTop} key={item.id} data={item} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LayoutProductHome;
