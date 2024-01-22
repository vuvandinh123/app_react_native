import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Icon2 from "react-native-vector-icons/Ionicons";
import { ButtonBack } from "../components/common";
import { useNavigation } from "@react-navigation/native";
import { postRequest } from "../api/request";
import Toast from "react-native-toast-message";

const LayoutSingup = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
  });
  const handlePressSignUp = async () => {
    if (
      data.lastName === "" ||
      data.firstName === "" ||
      data.email === "" ||
      data.password === ""
    ) {
      Toast.show({
        type: "error",
        text1: "All field is required",
      });
      return;
    }
    const response = await postRequest("auth/singup", { ...data });
    if (response) {
      navigation.navigate("Login");
      Toast.show({
        type: "success",
        text1: "Singup Success",
      });
    }
  };
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View className=" mt-10 px-5  justify-center">
      <View className="mt-5">
        <ButtonBack onPress={() => navigation.goBack()} />
      </View>
      <View className="h-[70vh] mt-20 w-full">
        <View>
          <Text className="font-bold text-2xl ">Create Account</Text>
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setData({ ...data, lastName: text })}
            className="w-full rounded-lg mt-5  p-3 bg-[#e4e4e4]"
            placeholder="First Name"
          ></TextInput>
          <TextInput
            onChangeText={(text) => setData({ ...data, firstName: text })}
            className="w-full rounded-lg mt-5  p-3 bg-[#e4e4e4]"
            placeholder="Last Name"
          ></TextInput>
          <TextInput
            onChangeText={(text) => setData({ ...data, email: text })}
            className="w-full rounded-lg mt-5  p-3 bg-[#e4e4e4]"
            placeholder="Email"
          ></TextInput>
          <TextInput
            onChangeText={(text) => setData({ ...data, password: text })}
            className="w-full rounded-lg mt-5  p-3 bg-[#e4e4e4]"
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={handlePressSignUp}
            className="bg-blue-500 rounded-lg mt-5 px-5 py-2"
          >
            <Text className=" text-center text-2xl text-white font-bold">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center gap-1 mt-5">
          <Text>Do have an Account ? </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text className="text-blue-500">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LayoutSingup;
