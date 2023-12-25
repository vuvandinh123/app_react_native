import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon2 from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { byToCart, qtyCart } from "../../../redux/slice/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { setIsUser } from "../../../redux/slice/statusModal";

const CartBottom = ({data}) => {
  const [quantity, setQuantity] = React.useState(1);
  const { token } = useSelector((state) => state.auth);

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handleMinusPress = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const handlePlusPress = () => {
    setQuantity(quantity + 1);
  }
  const  handlePressAddToCart = () => {
    if(!token){
      dispatch(setIsUser(true));
      return;
    }
    const product = {
      name: data.name,
      price: data.price,
      id: data.id,
      slug: data.slug,
      image_url:data.image_url || data.images[0].image_url  ,
    };
    dispatch(byToCart(product));
    dispatch(qtyCart({id: data.id, qty: quantity}))
    navigation.navigate("Cart")
  }
  return (
    <View className="flex gap-x-2 border-gray-300 absolute bottom-0 left-0 w-full p-5 px-10 bg-white flex-row justify-between items-center ">
      <View className="rounded-full flex items-center flex-row px-5 border-gray-300  border overflow-hidden">
        <TouchableOpacity
          onPress={handleMinusPress}
          className="py-3 px-1 text-center"
        >
          <Icon2 name="minus"></Icon2>
        </TouchableOpacity>
        <TextInput
          className="w-10 text-center text-base"
          defaultValue={quantity.toString()}
        />
        <TouchableOpacity
          onPress={handlePlusPress}
          className="text-2xl text-center py-2 px-2"
        >
          <Icon2 name="plus"></Icon2>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handlePressAddToCart} className="w-48 py-3 bg-orange-400 rounded-full flex flex-row items-center justify-center">
        <Text className="text-white font-bold">Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartBottom;
