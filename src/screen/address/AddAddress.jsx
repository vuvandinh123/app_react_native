import React, { useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TopBar } from "../../components/common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const AddAddress = ({route}) => {
  const [addressStore, setAddressStore] = useState([]);
  const prev =route.params?.prev
  const [address, setAddress] = useState({
    phone:"",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    active:false
  });
  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("address").then((value) => {
        if (value) {
          setAddressStore(JSON.parse(value));
        }
      });
    }, [])
  );
  const navigation = useNavigation();

  const handlePressToSave = () => {
    const addres = [...addressStore, address];
    AsyncStorage.setItem("address", JSON.stringify(addres));
    navigation.navigate("ScreenAddress",{prev});
  };
  return (
    <View>
      <View className="mt-10 relative h-[100vh]">
        <View className="mx-5">
          <TopBar title="New Address" isSearch={true}></TopBar>
        </View>
        <View className="mx-5 mt-10">
          <View>
          <TextInput
              className="border w-full mb-5 border-[#fffffff6] rounded-lg py-3 bg-[#F9FAFB] px-3"
              value={address.phone}
              onChangeText={(text) =>
                setAddress({ ...address, phone: text })
              }
              placeholder="Phone Number"
            ></TextInput>
            <TextInput
              className="border w-full border-[#fffffff6] rounded-lg py-3 bg-[#F9FAFB] px-3"
              value={address.streetAddress}
              onChangeText={(text) =>
                setAddress({ ...address, streetAddress: text })
              }
              placeholder="Street Address"
            ></TextInput>
            <TextInput
              className="border mt-5 w-full border-[#fffffff6] rounded-lg py-3 bg-[#F9FAFB] px-3"
              placeholder="City"
              value={address.city}
              onChangeText={(text) => setAddress({ ...address, city: text })}
            ></TextInput>
            <View className="flex w-full overflow-hidden flex-row mt-5 justify-between">
              <TextInput
                className="border basis-2/4 border-[#fffffff6] rounded-lg py-3 bg-[#F9FAFB] px-3"
                placeholder="State"
                value={address.state}
                onChangeText={(text) => setAddress({ ...address, state: text })}
              ></TextInput>
              <TextInput
                className="border basis-1/3 border-[#fffffff6] rounded-lg py-3 bg-[#F9FAFB] px-3"
                placeholder="Zip Code"
                value={address.zipCode}
                onChangeText={(text) =>
                  setAddress({ ...address, zipCode: text })
                }
              ></TextInput>
            </View>
          </View>
        </View>
        <View className="mx-5">
          <TouchableOpacity
            onPress={handlePressToSave}
            className="rounded-full bg-blue-500 py-3 mt-3 border-gray-100"
          >
            <Text className="text-center text-white font-semibold text-base">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddAddress;
