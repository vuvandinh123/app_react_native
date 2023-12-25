import React from "react";
import { Image, Text, View } from "react-native";
import cart from "../../../assets/shopping-cart.png";
import bell from "../../../assets/bell.png";
import Icon from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather"; // Để sử dụng icon
import { useDispatch, useSelector } from "react-redux";
import { setIsUser } from "../../redux/slice/statusModal";
import { Notification, ShoppingCart } from "iconsax-react-native";

const Header = () => {
  const navigation = useNavigation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handlePressCart = () => {
    if (token) {
      navigation.navigate("Cart");
    } else {
      dispatch(setIsUser(true));
    }
  };
  return (
    <View className="py-5 border-b border-[#e8e9eb]">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Image
            className="w-10 h-10  rounded-full"
            source={require("../../../assets/dinh.jpg")}
          ></Image>
        </View>
        <View className="ms-2">
          <Text className="font-bold ml-2 text-xl text-center text-blue-600">
            VuDinh <Text className="text-red-500">Store.</Text>
          </Text>
        </View>
        <View>
          <View className="flex flex-row items-center gap-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              className="relative"
            >
              {/* <Ionicons onPress={() => navigation.navigate("Notifications")} name="notifications" size={24} color="black"></Ionicons> */}
              <Notification size="24" color="#555555" />
              <View className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></View>
            </TouchableOpacity>
            <View className="relative">
              <TouchableOpacity onPress={handlePressCart}>
                {/* <Feather name="shopping-cart" size={24}></Feather> */}
                <ShoppingCart size="24" color="#555555" />
                <View className="absolute top-0 -right-0 w-2 h-2 bg-red-500 rounded-full"></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
