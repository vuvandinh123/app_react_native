import React from "react";
import { Text, View } from "react-native";
import { TopBar } from "../../components/common";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderDetail = ({ route }) => {
  const { count, id ,phone,email,address,note} = route.params;
  const navigation = useNavigation();
  const handlePressItems = () => {
    navigation.navigate("OrderItems", { id:id });
  };
  return (
    <View className="px-5 mt-10">
      <TopBar title={"Order #" + id} isSearch={true}></TopBar>
      <View className="mt-5">
        <View>
          <View className="flex mb-8  flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-2">
              <View className="rounded-full items-center justify-center w-6 h-6 bg-gray-300">
                <AntDesign name="check" color={"white"} size={15}></AntDesign>
              </View>
              <View>
                <Text>Delivered</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-500">28 May</Text>
            </View>
          </View>
          <View className="flex mb-8 flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-2">
              <View className="rounded-full items-center justify-center w-6 h-6 bg-purple-500">
                <AntDesign name="check" color={"white"} size={15}></AntDesign>
              </View>
              <View>
                <Text>Shipped</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-500">29 May</Text>
            </View>
          </View>
          <View className="flex mb-8 flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-2">
              <View className="rounded-full items-center justify-center w-6 h-6 bg-purple-500">
                <AntDesign name="check" color={"white"} size={15}></AntDesign>
              </View>
              <View>
                <Text>Order Confirmed</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-500">29 May</Text>
            </View>
          </View>
          <View className="flex mb-8 flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-2">
              <View className="rounded-full items-center justify-center w-6 h-6 bg-purple-500">
                <AntDesign name="check" color={"white"} size={15}></AntDesign>
              </View>
              <View>
                <Text>Order Placed</Text>
              </View>
            </View>
            <View>
              <Text className="text-gray-500">30 May</Text>
            </View>
          </View>
        </View>
        <View className="mt-10">
          <Text className="font-semibold text-base ">Order Items</Text>
          <View className="mt-5">
            <TouchableOpacity
              onPress={handlePressItems}
              className="flex mb-2 py-5 justify-between items-center flex-row bg-white rounded-lg"
            >
              <View className="flex flex-row items-center">
                <View className="flex items-center w-16">
                  <MaterialCommunityIcons
                    name="note-text-outline"
                    size={30}
                  ></MaterialCommunityIcons>
                </View>
                <Text className="pr-5 font-bold text-base ">
                  {count} items
                </Text>
              </View>
              <Text className="text-blue-500 pr-5">View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-10">
          <Text className="font-semibold text-base ">Shipping details</Text>
          <View className="mt-5">
            <View className=" mb-2 px-5 py-5 justify-between items-center  bg-white rounded-lg">
              <View className="flex w-full mb-3 justify-between flex-row items-center">
                <Text className="text-gray-500">Email: </Text>
                <Text>{email} </Text>
              </View>
              <View className="flex w-full mb-3 justify-between flex-row items-center">
                <Text className="text-gray-500">Phone number: </Text>
                <Text>{phone} </Text>
              </View>
              <View className="flex w-full mb-3 justify-between flex-row items-center">
                <Text className="text-gray-500">Address: </Text>
                <Text className="w-1/2 ">{address} </Text>
              </View>
              <View className="flex w-full mb-3 justify-between flex-col">
                <Text className="text-gray-500">Note </Text>
                <View className="border border-gray-300 rounded-md px-3 py-2 mt-3">
                  <Text className="text-gray-500">
                    {note || "No Note"}{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDetail;
