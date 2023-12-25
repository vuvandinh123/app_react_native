import React from "react";
import { Text, TextInput, View } from "react-native";
import { CardNews, TopBar } from "../../components/common";
import Icon from "react-native-vector-icons/EvilIcons";
import { useFetchBlog } from "../../hook/useFetchBlog";

const BlogScreen = () => {
  const {data,loading} = useFetchBlog();
  return (
    <View className="px-5 pt-10">
      <TopBar title="Blog" isSearch={true} />
      <View>
        <View className="relative flex flex-row mt-5">
          <TextInput
            className="border w-full border-[#fffffff6] rounded-lg py-2 bg-[#F9FAFB] px-3"
            placeholder="Search blog name"
          />
          <Text className="absolute right-3  top-3 ">
            <Icon name="search" size={30} color="black" />
          </Text>
        </View>
        <View>
          {data &&
            data.map((item, index) => <CardNews item={item} key={index} />)}
        </View>
      </View>
    </View>
  );
};

export default BlogScreen;
