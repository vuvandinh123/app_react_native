import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { AppURL } from "../../api/AppUrl";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCart } from "../../redux/slice/cartSlice";
import { addToStatus } from "../../redux/slice/statusModal";
import { formatPrice } from "../../untils";

const Product = ({ data, handleToTop, layout }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("ProductDetails", {
      slug: data.slug,
    });
    if (handleToTop) {
      handleToTop();
    }
  };
  const handleAddToCartPress = (data) => {
    const product = {
      name: data.name,
      price: Number(data.price),
      id: data.id,
      slug: data.slug,
      image_url: data.image_url || data.images[0].image_url,
    };
    dispatch(
      addToStatus({
        isOpen: true,
        data: product,
      })
    );
  };
  return (
    <View
      className={`${
        layout ? "w-1/2 p-1" : "w-[43vw] mr-2"
      } relative  rounded-md `}
    >
      <View className="bg-white">
        <TouchableOpacity onPress={handlePress}>
          <View className="flex h-[200px] p-5 flex-row justify-center items-center">
            {data?.images && data?.images[0]?.image_url && (
              <Image
                resizeMode="contain"
                width={100}
                height={100}
                source={{
                  uri: `${AppURL.ImageUrl}${data?.images[0]?.image_url}`,
                }}
              />
            )}
            {data?.image_url && (
              <Image
                resizeMode="contain"
                width={100}
                height={100}
                source={{
                  uri: `${AppURL.ImageUrl}${data?.image_url}`,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
        {data.sale && (
          <View className="absolute bottom-32 left-2 px-2 py-1 bg-red-500 rounded-full">
            <Text className="text-white font-bold">SALE</Text>
          </View>
        )}
        <View className="px-3 pb-5">
          <TouchableOpacity>
            <Text className="font-medium text-ellipsis h-10 max-h-[2.4em] w-full line-clamp-3 overflow-hidden">
              {data.name}
            </Text>
          </TouchableOpacity>
          <Text className="text-sm font-medium mb-1 text-red-600">
            {formatPrice(Number(data.price))}
          </Text>
          <View className="flex flex-row  justify-between items-center">
            <View className="flex flex-row gap-2 items-center">
              <Text className="">
                <Icon name="star" color={"#FFC107"}></Icon>
              </Text>
              <Text>4.5</Text>
            </View>
            <View>
              <Text className="text-[12px]">86 Reviews</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => handleAddToCartPress(data)}>
                <Icon2
                  name="dots-three-vertical"
                  size={20}
                  color={"#000"}
                ></Icon2>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;
