import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const HistorySearch = React.memo(({ histoty, setSearch }) => {
  return (
    <View className="mt-3 flex flex-row flex-wrap">
      {histoty.reverse().map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => setSearch(item)}
            style={{ alignSelf: "flex-start" }}
            key={index}
            className="px-4 m-1 border  flex flex-row items-center border-gray-200 rounded-xl  p-1"
          >
            <AntDesign name="reload1" size={16} color={"#8f8f8f"}></AntDesign>
            <Text
              style={{ alignSelf: "flex-start" }}
              className="ml-3 text-gray-500"
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});

export default HistorySearch;
