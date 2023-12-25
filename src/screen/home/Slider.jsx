import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import slider1 from "../../../assets/slider.png";
import slider2 from "../../../assets/silder2.png";

const Slider = () => {
  
  const data = [
    {
      id: 1,
      text1: "Gatis Ongkir Selama PPKM!",
      text2: "Periode Mei - Agustus 2021",
      image: slider1,
    },
    {
      id: 2,
      text1: "Kemerdekaan Diskon 70% ",
      text2: "Periode Agustus 2021",
      image: slider2
    },
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal className="mt-5 ">
      {data.map((item) => (
        <View key={item.id} className="w-[85vw] h-[150px] mr-3">
          <View className="relative rounded-lg overflow-hidden">
            <View className="absolute flex flex-col justify-center items-center z-20 bg-blue-500 w-1/2 rounded-r-full h-full">
              <Text className="text-white text-center  text-xl font-bold">
                {item.text1}
              </Text>
              <Text className="text-white font-bold text-[10px] mt-3">
                {item.text2}
              </Text>
            </View>
            <Image className="w-full object-right " source={item.image} />
          </View>
        </View>
      ))}
      {/* Thêm nhiều items khác nếu cần */}
    </ScrollView>
  );
};

export default Slider;
