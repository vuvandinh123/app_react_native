import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
const LayoutTellUs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const [selected, setSelected] = React.useState("");
  const data = [];
  for (let index = 1950; index < 2023; index++) {
    data.push({ key: index, value: index });
  }

  return (
    <View className="mt-20 px-5 h-screen">
      <Text className="font-bold text-2xl my-3">Tell us About yourself</Text>
      <View className="mt-10">
        <Text>Who do you shop for ?</Text>
        <View className="flex flex-row items-center justify-center gap-x-5">
          <TouchableOpacity className="bg-blue-500 rounded-lg mt-5 px-5 py-2 w-28">
            <Text className="font-bold text-white text-center">MEN</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-slate-300 w-28  rounded-lg mt-5 px-5 py-2">
            <Text className="font-bold text-center"> WOMEN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-10">
        <Text>What year were you born ?</Text>
        <View className="mt-5">
          <SelectList
            className="w-full"
            setSelected={(val) => setSelected(val)}
            data={data}
            search={false}
            defaultOption={{ key: "1", value: "Your Birth Year" }}
            save="value"
          />
        </View>
      </View>
      <View className="absolute bottom-16 w-full left-5">
        <TouchableOpacity className="bg-blue-500 rounded-lg mt-5 px-5 py-4 w-full">
          <Text className="text-white text-center font-bold">Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LayoutTellUs;
