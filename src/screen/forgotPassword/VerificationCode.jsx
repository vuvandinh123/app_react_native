import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TopBar } from "../../components/common";
import { useNavigation } from "@react-navigation/native";
import { postRequest } from "../../api/request";
import Toast from "react-native-toast-message";

const VerificationCode = ({ route }) => {
  const [time, setTime] = useState(60);
  const [code, setCode] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });
  const navigation = useNavigation();
  const { email } = route.params;
  const fetch = async () => {
    const res = await postRequest("/checkCode", { email: email });
    return res;
  };
  const handlePressEnter = async () => {
    const num = code.num1 + code.num2 + code.num3 + code.num4;
    console.log(num);
    if (num.length === 4) {
      const res = await fetch();
      if (num == res) {
        setCode([]);
        navigation.navigate("CreateNewPassword", { email: email, code: res });
      } else {
        Toast.show({
          type: "error",
          text1: "Code not valid",
        });
        setCode([]);
      }
    } else {
      alert("Code not empty");
    }
  };
  const handlePressResend = () => {
    const fetch = async () => {
      const res = await postRequest("/sendEmail", { email: email });
      if (res) {
        setTime(60);
        Toast.show({
          type: "success",
          text1: "Code sent to your email",
        });
      }
    };
    if (time === 0) {
      fetch();
    }
  };
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);
  return (
    <View className="px-5 mt-10">
      <TopBar isSearch={true} title={""} />
      <View className="mt-5">
        <Text className="text-3xl text-center font-medium mb-5">
          Reset your password
        </Text>
        <Text className="text-center text-gray-400 mb-3">
          We need your Email so we can send you the passwoed reset code.
        </Text>
        <View className="flex justify-center mt-5 flex-row gap-x-3">
          <TextInput
            className="border mt-3 w-14 h-14 bg-white text-xl text-center border-gray-400 rounded-lg "
            keyboardType="numeric"
            maxLength={1}
            value={code.num1}
            onChange={(e) => {
              setCode({ ...code, num1: e.nativeEvent.text });
            }}
          ></TextInput>
          <TextInput
            className="border mt-3 w-14 h-14 bg-white text-xl text-center border-gray-400 rounded-lg "
            keyboardType="numeric"
            maxLength={1}
            value={code.num2}
            onChange={(e) => {
              setCode({ ...code, num2: e.nativeEvent.text });
            }}
          ></TextInput>
          <TextInput
            className="border mt-3 w-14 h-14 bg-white text-xl text-center border-gray-400 rounded-lg "
            keyboardType="numeric"
            maxLength={1}
            value={code.num3}
            onChange={(e) => {
              setCode({ ...code, num3: e.nativeEvent.text });
            }}
          ></TextInput>
          <TextInput
            className="border mt-3 w-14 h-14 bg-white text-xl text-center border-gray-400 rounded-lg "
            keyboardType="numeric"
            maxLength={1}
            value={code.num4}
            onChange={(e) => {
              setCode({ ...code, num4: e.nativeEvent.text });
            }}
          ></TextInput>
        </View>

        <TouchableOpacity
          className="bg-blue-500 py-4 mt-6 rounded-lg"
          activeOpacity={0.7}
          onPress={handlePressEnter}
        >
          <Text className="text-center text-white font-medium ">Confirm</Text>
        </TouchableOpacity>
        <View className="mt-8 flex flex-row items-center">
          <Text>Didn't get the code yet ? </Text>
          <TouchableOpacity onPress={handlePressResend} className="">
            <Text className="text-blue-500  font-semibold">
              Resend {(time > 0 && "(" + time + ")") || ""}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerificationCode;
