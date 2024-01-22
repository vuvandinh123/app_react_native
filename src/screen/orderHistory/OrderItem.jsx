import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TopBar } from "../../components/common";
import { getRequest } from "../../api/request";
import { useSelector } from "react-redux";
import { AppURL } from "../../api/AppUrl";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { formatPrice } from "../../untils";

const OrderItem = ({ route }) => {
  const { id } = route.params;
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const total = data.reduce((a, b) => a + b.total, 0);
  useEffect(() => {
    const fetch = async () => {
      const res = await getRequest(
        `/orders/${id}/show`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(res.data.order_detail);
    };
    fetch();
  }, []);
  const handlePressProduct = (slug) => {
    navigation.navigate("ProductDetails", { slug });
  };
  return (
    <View className="px-5 mt-10 h-full">
      
      <TopBar title={"Order details #" + id} isSearch={true}></TopBar>
      <View className="mt-2">
        <ScrollView className="h-[62vh]">
          {data.map((item, index) => (
            <View
              key={index}
              className="rounded-lg mb-3 bg-white overflow-hidden "
            >
              <View>
                <View key={index} className=" flex  flex-row p-2 rounded-md">
                  <TouchableOpacity
                    onPress={() => handlePressProduct(item.product.slug)}
                    className="mr-3"
                  >
                    <Image
                      resizeMode="contain"
                      className="rounded-lg  "
                      width={80}
                      height={80}
                      source={{
                        uri: `${AppURL.ImageUrl}${item.product.images[0].image_url}`,
                      }}
                    />
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity
                      onPress={() => handlePressProduct(item.product.slug)}
                      className="w-[90%] font-bold"
                    >
                      <Text className="w-full">{item.product.name}</Text>
                    </TouchableOpacity>
                    <View className="mt-2">
                      <Text className="font-bold text-base  text-red-500 mb-3">
                        {formatPrice(item.product.price)}
                      </Text>
                      <View className="flex flex-row items-center gap-x-2">
                        <Text>Quantity: {item.quantity}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.5,
          shadowColor: "red",
        }}
        className="h-[250] bg-white rounded-t-3xl absolute left-0 right-0 bottom-0"
      >
        <View className="px-5">
          <View className="flex flex-row items-center justify-between mt-5">
            <Text className="text-gray-500">Subtotal:</Text>
            <Text className="text-black font-bold text-base">
              {formatPrice(total)}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-5">
            <Text className="text-gray-500">Shipping:</Text>
            <Text className="text-black font-bold text-base">$3.00</Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-5">
            <Text className="text-gray-500">Shipping:</Text>
            <Text className="text-red-500 font-semibold text-xl">
              {formatPrice(total + 3)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
