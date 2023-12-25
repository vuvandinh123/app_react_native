import React from "react";
import { CardNews } from "../../components/common";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const News = ({ data }) => {
  const navigation = useNavigation();
  const handlePressSeeAll = () => {
    navigation.navigate("Blog");
  };
  return (
    <View className="my-5">
      <Text className="text-xl font-bold">Latest News</Text>
      {data && data.map((item, index) => <CardNews item={item} key={index} />)}
      <TouchableOpacity
        onPress={handlePressSeeAll}
        className="bg-white mt-5 border flex items-center  rounded-lg py-3"
      >
        <Text className="font-bold text-base">See All News</Text>
      </TouchableOpacity>
    </View>
  );
};

export default News;
