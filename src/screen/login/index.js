import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Icon2 from "react-native-vector-icons/Ionicons";
import { ButtonBack } from "../../components/common";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../redux/slice/authSlice";
import { getRequest, postRequest } from "../../api/request";

const LoginScreen = ({ route }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const previousRoute = route;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSingupPress = () => {
    navigation.navigate("Singup");
  };

  const handlePressLogin = async () => {
    const response = await postRequest("auth/login", { email, password });
    if (response) {
      const token = response.access_token;
      const response2 = await getRequest(
        "/admin/auth/user",
        {},
        {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      );
      dispatch(setToken(token));
      dispatch(setUser(response2))
      AsyncStorage.setItem("token", token);
      navigation.goBack();
      Toast.show({
        type: "success",
        text1: "Login Success",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Login Failure",
        text2: "Wrong Email or Password",
      });
    }
  };
  const handleForgotpasswordPress = ()=>{
    navigation.navigate("ForgotPassword")
  }
  return (
    <View className=" mt-10 px-5  justify-center">
      <View className="mt-5">
        <ButtonBack onPress={() => navigation.goBack()} />
      </View>
      <View className="h-[70vh] mt-20 w-full">
        <View>
          <Text className="font-bold text-4xl ">Sing in</Text>
        </View>
        <View>
          <TextInput
            className="w-full rounded-lg mt-5  p-3 bg-[#e4e4e4]"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            className="w-full rounded-lg mt-5  p-3 bg-[#e4e4e4]"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={handlePressLogin}
            className="bg-blue-500 rounded-lg mt-5 px-5 py-2"
          >
            <Text className=" text-center text-2xl text-white">Login</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center gap-1 mt-5">
          <Text>Forgot Password ? </Text>
          <TouchableOpacity onPress={handleForgotpasswordPress}>
            <Text className="text-blue-500">Reset</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center gap-1 mt-5">
          <Text>Dont have an Account ? </Text>
          <TouchableOpacity onPress={handleSingupPress}>
            <Text className="text-blue-500">Create One</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <TouchableOpacity className="rounded-full justify-between flex mt-3 flex-row items-center bg-slate-200 px-4 py-3">
            <Icon2
              name="logo-facebook"
              className=""
              size={25}
              color={"blue"}
            ></Icon2>
            <Text className="text-black capitalize font-bold ">
              Login with Facebook
            </Text>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full justify-between flex mt-3 flex-row items-center bg-slate-200 px-4 py-3">
            <Icon2
              name="logo-apple"
              className=""
              size={25}
              color={"black"}
            ></Icon2>
            <Text className="text-black capitalize font-bold ">
              Login with Apple
            </Text>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full justify-between flex mt-3 flex-row items-center bg-slate-200 px-4 py-3">
            <Icon2
              name="logo-google"
              className=""
              size={25}
              color={"red"}
            ></Icon2>
            <Text className="text-black capitalize font-bold">
              Login with Google
            </Text>
            <View></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
