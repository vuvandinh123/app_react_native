import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonBack } from "../../components/common";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AppURL } from "../../api/AppUrl";
import { useDebounce } from "../../hook";
import HistorySearch from "../../components/search/HistorySearch";
import { postRequest } from "../../api/request";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);
  const [data, setData] = useState([]);
  const [histoty, setHistory] = useState([
    "samsung",
    "iphone 15 pro max",
    "laptop",
    "lap top garming",
  ]);
  const textInputRef = useRef(null);
  useEffect(() => {
    const fetch = async () => {
      const res = await postRequest(
        "/products/search/all",
        { search },
        { limit: 5 }
      );
      setData(res.data);
    };
    fetch();
  }, [debouncedSearch]);
  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);
  const handleEditingEnd = () => {
    if (search === "") return;
    setHistory([...histoty, search]);
  };
  const random = Math.floor(Math.random() * 20);
  return (
    <View className="mt-12 mx-5">
      <View className="border-b border-gray-200 pb-4">
        <View className="flex flex-row items-center">
          <ButtonBack onPress={() => navigation.goBack()}></ButtonBack>
          <Text className="absolute left-[40%] text-xl font-bold">Search</Text>
        </View>
      </View>
      <View className="">
        <View className="relative flex flex-row mt-5">
          <TextInput
            className="border w-full border-[#fffffff6] rounded-lg py-3 bg-[#F9FAFB] px-3"
            placeholder="Search products name"
            onChangeText={(text) => setSearch(text)}
            onEndEditing={handleEditingEnd}
            ref={textInputRef}
            value={search}
          />
          <Text className="absolute right-3 items-center  top-3 ">
            {
              search.length > 0 && <Icon name="close" size={25} color="gray" onPress={() => setSearch("")} />
            }
            <Icon name="search" size={30} color="black" />
          </Text>
        </View>
        <View>
          <View className="flex mt-5 flex-row items-center justify-between">
            <Text className="font-bold">Recently Search</Text>
            <TouchableOpacity onPress={() => setHistory([])}>
              <Text className="text-orange-400"> Clear</Text>
            </TouchableOpacity>
          </View>
          <HistorySearch histoty={histoty} setSearch={setSearch}></HistorySearch>
        </View>
        <View>
          <View className="flex mt-5 flex-row items-center justify-between">
            <Text className="font-bold">Popular Products</Text>
            <TouchableOpacity onPress={() => setHistory([])}>
              <Text className="text-blue-400"> {random} Results</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5 mb-52">
            <View className="">
              {data &&
                data?.map((item) => {
                  return (
                    <View key={item.id}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("ProductDetails", {
                            slug: item.slug,
                          })
                        }
                        style={{
                          shadowColor: "#7d5a5a",
                          shadowOffset: { width: 0, height: 5 },
                          shadowOpacity: 0.2,
                          shadowRadius: 3.84,
                          elevation: 2,
                        }}
                        className="border mb-1 flex flex-row justify-between bg-white border-gray-200 rounded-lg p-2"
                      >
                        <View className="flex flex-row gap-2">
                          <Image
                            className="w-14 h-14 rounded-lg"
                            resizeMode="contain"
                            source={{
                              uri: `${AppURL.ImageUrl}${item.images[0].image_url}`,
                            }}
                          ></Image>
                          <View>
                            <Text className="font-medium w-[45vw] h-5 overflow-hidden">
                              {item.name}
                            </Text>
                            <Text className="text-red-400 font-bold mt-3">
                              ${item.price}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <View className="bg-yellow-500 px-3 py-1 rounded-xl">
                            <View className=" flex flex-row items-center gap-2">
                              <Text className="text-white font-semibold">
                                4.5
                              </Text>
                              <AntDesign
                                name="star"
                                size={14}
                                color="white"
                              ></AntDesign>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
            </View>
            <View>
              {data.length > 0 && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("AllProduct")}
                  className="bg-white mt-5 border flex items-center  rounded-lg py-3"
                >
                  <Text className="font-bold text-base">See more</Text>
                </TouchableOpacity>
              )}
              {data.length == 0 && (
                <Text className="text-center mt-10">No data found</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
