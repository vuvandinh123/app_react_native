import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Loading, TopBar } from "../../components/common";
import { useNavigation } from "@react-navigation/native";
import { getRequest, postRequest } from "../../api/request";
import { validateEmail } from "../../untils";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = React.useState({
    isValid: false,
    message: "",
  });
  const handlePressEnter = () => {
    const fetch = async () => {
      setLoading(true);
      const res = await postRequest("/sendEmail", { email: email });
      if (!res) {
        setLoading(false);
        alert("Email khong ton tai");
        return;
      }
      setLoading(false);
      navigation.navigate("VerificationCode", { email: email });
    };
    if (email == "") {
      setEmailValid({
        isValid: false,
        message: "Email is required",
      });
    } else if (!validateEmail(email)) {
      setEmailValid({
        isValid: false,
        message: "Email is not valid",
      });
    } else {
      fetch();
    }
  };
  const handleChangeEmail = (text) => {
    setEmail(text);
    setEmailValid({
      isValid: validateEmail(text),
      message: "Email is valid",
    });
  };
  if (loading) {
    return (
      <View>
        <Loading />
      </View>
    );
  }
  return (
    <View className="px-5 pt-10 h-[110vh]">
      <TopBar isSearch={true} title={""} />
      <View className="mt-5">
        <Text className="text-3xl text-center font-medium mb-5">
          Reset your password
        </Text>
        <Text className="text-center text-gray-400 mb-3">
          We need your Email so we can send you the passwoed reset code.
        </Text>
        <TextInput
          className={`border mt-3  rounded-lg py-4 px-3 ${
            !emailValid.isValid && email.length > 5
              ? "border-red-500"
              : "border-blue-400"
          }`}
          placeholder="Enter Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={handleChangeEmail}
        ></TextInput>
        {email.length > 5 && !emailValid.isValid && (
          <Text className="text-red-500 mt-1">{emailValid.message}</Text>
        )}
        <TouchableOpacity
          onPress={handlePressEnter}
          className="bg-blue-500 py-4 mt-6 rounded-lg"
          activeOpacity={0.7}
        >
          <Text className="text-center text-white font-medium ">Send code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
