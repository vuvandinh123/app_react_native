import React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { TopBar } from "../../components/common";
import { postRequest } from "../../api/request";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const CreateNewPassword = ({ route }) => {
  const { code, email } = route.params;
  const navigation = useNavigation();
  const [password, setPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const handlePressConfirm = () => {
    const fetch = async () => {
      const res = await postRequest("/forgot-password", {
        email: email,
        code: code,
        password: password.password,
      });
      console.log(res);
      if (res=="success") {
        Toast.show({
          type: "success",
          text1: "Create New Password Success",
        })
        navigation.navigate("Login");
      }
    };
    if(password.password === password.confirmPassword) {
      fetch();
    } else {
      alert("Password not match");
    }
  };
  return (
    <View className="px-5 mt-10">
      <TopBar isSearch={true} title={""} />
      <View className="mt-5">
        <Text className="text-3xl capitalize text-center font-medium mb-5">
          Create new password
        </Text>
        <Text className="text-center text-gray-400 mb-3 px-10">
          Create a new password, please dont's forget this on too.
        </Text>
        <View className="flex justify-center mt-5 ">
          <TextInput
            className="border mt-3 w-full h-14 bg-white px-5 border-gray-400 rounded-lg "
            placeholder="Enter New Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword({ ...password, password: text })}
          ></TextInput>
          <TextInput
            className="border mt-3 w-full h-14 bg-white px-5 border-gray-400 rounded-lg "
            placeholder="Confirm New Password"
            secureTextEntry={true}
            onChangeText={(text) =>
              setPassword({ ...password, confirmPassword: text })
            }
          ></TextInput>
        </View>

        <TouchableOpacity
          className="bg-blue-500 py-4 mt-6 rounded-lg"
          activeOpacity={0.7}
          onPress={handlePressConfirm}
        >
          <Text className="text-center text-white font-medium ">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateNewPassword;
