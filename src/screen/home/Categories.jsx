import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import cate1 from "../../../assets/Vegetable-1.png";
import cate2 from "../../../assets/Fruits.png";
import cate3 from "../../../assets/Eggs.png";
import cate4 from "../../../assets/Meat.png";
import { Image } from "react-native";
import { getRequest } from "../../api/request";
import { AppURL } from "../../api/AppUrl";
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetch = async () => {
      const res = await getRequest("/categories", { limit: 20 });
      setData(res.data.data);
    };
    fetch();
  }, []);
  return (
    <View>
      <View className="flex mt-5 items-center flex-row justify-between">
        <Text className="text-xl font-bold">Categories</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Category")}
          className="text-blue-600"
        >
          <Text>View All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          className="my-5"
        >
          {data.map((item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Category", {
                  screen: "ProductByCategry",
                  params: {
                    id: item.id,
                    name: item.name,
                  },
                })
              }
              key={item.id}
              className="flex items-center rounded-lg overflow-hidden gap-3 mr-5"
            >
              <View className="rounded-lg bg-[#fff] p-3 w-16 h-16">
                <Image
                  source={{ uri: `${AppURL.ImageUrl}${item.image}` }}
                  className="w-10 h-10"
                />
              </View>
              <Text className="text-center">{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
