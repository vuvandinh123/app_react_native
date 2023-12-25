import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { View } from "react-native";
import { TopBar } from "../../components/common";
import { useFetchBlogDetail } from "../../hook/useFetchBlogDetail";
import { AppURL } from "../../api/AppUrl";
import { formathDate } from "../../untils";

const BlogDetailScreen = ({ route }) => {
  const { slug } = route.params;
  const { data, loading } = useFetchBlogDetail(slug);
  console.log(data);
  return (
    <View className="px-5 pt-10">
      <TopBar title={"Blog Detail"} isSearch={true} />
      <View className="">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            className="w-full max-w-full  h-[200px]  rounded-lg"
            resizeMode="contain"
            source={{ uri: `${AppURL.ImageUrl}${data.image}` }}
          ></Image>
          <Text className="font-bold text-base mt-5">{data?.title}</Text>
          <Text className="  text-gray-500 mt-3">
            {formathDate(data?.created_at)}
          </Text>
          <Text className="text-gray-500 mt-5">{data?.compact}</Text>
          <Text className=" text-md mt-5 mb-36">{data?.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default BlogDetailScreen;
