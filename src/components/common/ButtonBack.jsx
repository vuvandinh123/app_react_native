import React from "react";
import { TouchableOpacity } from "react-native";
import Icon2 from "react-native-vector-icons/Ionicons";

const ButtonBack = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} className="rounded-full w-10 h-10 bg-gray-200 flex justify-center items-center">
      <Icon2 name="chevron-back" size={25} color={"black"}></Icon2>
    </TouchableOpacity>
  );
};

export default ButtonBack;
