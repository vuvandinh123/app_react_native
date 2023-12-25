import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TopBar } from "../../components/common";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getRequest } from "../../api/request";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const OrderHistoryScreen = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getRequest(
        `/orders/${user.id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setData(res.data.data);
    };
    fetch();
  }, []);
  const navigation = useNavigation();
  const handlePressItem = (item) => {
    const data = {
      id: item.id,
      count: item.product_count,
      email: item.email,
      phone: item.phone,
      address: item.address,
      note: item.note,
    };
    navigation.navigate("OrderDetail", { ...data });
  };
  return (
    <View className="px-5 mt-10">
      <TopBar title="Order History" />
      <View className="mt-3">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-x-2">
            <TouchableOpacity className="bg-blue-500 rounded-full mt-5 px-5 py-2">
              <Text className="text-white">Processing</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e4e4e4] rounded-full mt-5 px-5 py-2">
              <Text className="text-black">Shipped</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e4e4e4] rounded-full mt-5 px-5 py-2">
              <Text className="text-black">Delivered</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e4e4e4] rounded-full mt-5 px-5 py-2">
              <Text className="text-black">Returned</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e4e4e4] rounded-full mt-5 px-5 py-2">
              <Text className="text-black">Canceled</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View className="mt-5 mb-10">
          <ScrollView className="h-[75vh]" showsVerticalScrollIndicator={false}>
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handlePressItem(item)}
                    className="flex mb-2 py-5 flex-row bg-white rounded-lg"
                  >
                    <View className="flex items-center w-16">
                      <MaterialCommunityIcons
                        name="note-text-outline"
                        size={30}
                      ></MaterialCommunityIcons>
                    </View>
                    <View>
                      <Text className="pr-5 font-bold text-base ">
                        Order {"#" + item.id}
                      </Text>
                      <Text className="text-gray-400">{item.product_count} items</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default OrderHistoryScreen;
