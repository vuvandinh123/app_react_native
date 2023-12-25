import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setIsUser } from "../../redux/slice/statusModal";

const CheckLogin = () => {
  const { isUser } = useSelector((state) => state.statusModal);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleClickLogin = () => {
    dispatch(setIsUser(false));
    navigation.navigate("Login");
  };
  const handlePressExit = () => {
    dispatch(setIsUser(false));
  };
  return (
    isUser && (
      <View className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000af] px-5">
        <View className="absolute p-2 right-5 top-1/3 pb-5  left-5  bg-white rounded-lg">
          <View className="flex flex-row border-b border-gray-300 py-3 items-center justify-center">
            <Text className="font-bold text-red-500 text-lg">Notification</Text>
          </View>
          <View className="px-2">
            <Text className="text-center my-10 text-base">
              You need to login to access this feature
            </Text>
            <View className="flex flex-row  justify-between">
              <TouchableOpacity
                onPress={handlePressExit}
                className="basis-1/2 mr-1 border rounded-lg py-2 border-gray-300"
              >
                <Text className="text-center  text-base text-blue-500">
                  Exit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleClickLogin}
                className="basis-1/2 border rounded-lg py-2 border-blue-300 bg-blue-500"
              >
                <Text className="text-center  text-base text-white font-semibold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  );
};

export default CheckLogin;
