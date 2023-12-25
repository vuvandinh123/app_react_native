import React, { useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { AppURL } from "../../../api/AppUrl";
import Swiper from "react-native-swiper";
const ImageSlider = ({ data }) => {
  const swiperRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  console.log(data);
  const handleChangeIndex = (index) => {
    setImageIndex(index);
  };
  const handleChangeSlide = (index) => {
    swiperRef.current.scrollTo(index);
    setImageIndex(index);
  };
  return (
    <View>
      <View className="w-full   mb-10 h-[380px]">
        <Swiper
          ref={swiperRef}
          loop={false}
          index={imageIndex}
          centeredSlides={true}
          dotStyle={{
            backgroundColor: "red",
            width: 8,
            height: 8,
          }}
          activeDotStyle={{
            backgroundColor: "red",
            width: 20,
            height: 8,
          }}
          paginationStyle={{ bottom: -25 }}
        >
          {data.images?.length > 0 &&
            data.images?.map((item, index) => (
              <View key={index}>
                <Image
                  className="w-full h-full  rounded-2xl"
                  resizeMode="contain"
                  source={{
                    uri: `${AppURL.ImageUrl}${item.image_url}`,
                  }}
                ></Image>
              </View>
            ))}
        </Swiper>
      </View>
      <View className="flex flex-row justify-center  items-center gap-3">
        <ScrollView horizontal >
          {data.images?.map((item, index) => {
            return (
              <View
                key={index}
                className={`w-16 h-16 mr-2  ${
                  index === imageIndex && "border border-red-500"
                } overflow-hidden rounded-lg bg-[#ffd7d7]`}
              >
                <TouchableOpacity
                  onPress={() => handleChangeSlide(index)}
                  key={index}
                >
                  <Image
                    className="w-full h-full"
                    source={{
                      uri: `${AppURL.ImageUrl}${item.image_url}`,
                    }}
                  ></Image>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ImageSlider;
