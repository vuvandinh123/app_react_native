import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TopBar } from "../../components/common";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ScreenAddress = ({ route }) => {
  const prev = route.params?.prev;
  const navigation = useNavigation();
  const [address, setAddress] = useState([]);
  const [active, setActive] = useState(0);
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("address").then((value) => {
        if (value) {
          const index = JSON.parse(value).findIndex(address => address.active === true);
          setActive(index)
          setAddress(JSON.parse(value));
        }
      });
    }, [])
  );
  const handlePressActive = (index) => {
    setActive(index);
    const addressNew = [...address];
    addressNew.forEach((item) => (item.active = false));
    addressNew[index].active = true;
    AsyncStorage.setItem("address", JSON.stringify(addressNew));
  };
  const handlePressEdit = () => {
    navigation.navigate("AddAddress", { prev: prev });
  };
  const handlePressNext = () => {
    navigation.navigate(prev, { prev: "ScreenAddress" });
  };
  const handlDeleteAddress = (index) => {
    const addressNew = [...address];
    addressNew.splice(index, 1);
    AsyncStorage.setItem("address", JSON.stringify(addressNew));
    setAddress(addressNew);
  };
  return (
    <View>
      <View className="mt-10 relative h-[100vh]">
        <View className="mx-5">
          <TopBar title="Address" isSearch={true}></TopBar>
        </View>
        <View className="mx-5">
          <ScrollView className="max-h-[70vh]">
            {address.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePressActive(index)}
                className={`bg-gray-200 ${
                  active == index && "border-blue-500 border"
                } flex flex-row rounded-lg justify-between items-center mt-3 p-5`}
              >
                <View>
                  <View className="w-[80vw] flex justify-between flex-row text-[12px]  mb-2">
                    <Text className="capitalize text-gray-400">
                      Shipping address {index + 1} {active == index && <AntDesign color="#2f2fdc" name="checkcircle"></AntDesign> }
                    </Text>
                    <View className="flex flex-row  justify-end">
                      <TouchableOpacity className="mr-3">
                        <Text className="text-blue-500 font-semibold">
                          Edit
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handlDeleteAddress(index)}>
                        <Text className="text-red-500 font-bold ">Delete</Text>
                      </TouchableOpacity>
                      <View className="flex flex-row items-center "></View>
                    </View>
                  </View>
                  <View>
                    <Text className=" font-medium w-[70vw]  mb-1 text-base capitalize">
                      <Text className="text-gray-500 font-normal">Phone: </Text>{" "}
                      {item.phone}
                    </Text>
                    <Text className=" font-medium w-[80vw]  mb-1 text-base capitalize">
                      <Text className="text-gray-500 font-normal">Address: </Text>{" "}
                      {item.streetAddress} {item.city}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="mx-5">
          <TouchableOpacity
            onPress={handlePressEdit}
            className="rounded-full bg-blue-500 py-3 mt-3 border-gray-100"
          >
            <Text className="text-center text-white font-semibold text-base">
              Add new address
            </Text>
          </TouchableOpacity>
          {prev == "Checkout" && (
            <TouchableOpacity
              onPress={handlePressNext}
              className="rounded-full bg-[#FF9900] py-3 mt-3 border-gray-100"
            >
              <Text className="text-center text-white font-semibold text-base">
                Continune place Order
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default ScreenAddress;
