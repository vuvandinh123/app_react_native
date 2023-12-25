import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import Heart from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/AntDesign";
import LayoutProductHome from "../../components/products/LayoutProductHome";
import Icon2 from "react-native-vector-icons/Ionicons";
import {
    CartBottom,
    Comment,
    DetailContent,
    ImageSlider,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setIsUser } from "../../redux/slice/statusModal";
import { DeleteFav, byToFav } from "../../redux/slice/favoriteSlice";
import { useFetchProductDetail, useToTop } from "../../hook";
import { Loading } from "../../components/common";

const DetailProductScreen = ({ route }) => {
    const navigation = useNavigation();
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { slug } = route.params;
    const topRef = useRef(null);
    const handleToTop = () => {
        topRef.current?.scrollTo({ x: 0, y: 0, animated: true });
    }
    const { data, loading, wishlist, setWishLish } = useFetchProductDetail(slug)
    const handleWishList = () => {
        if (!token) {
            dispatch(setIsUser(true));
            return;
        }
        setWishLish(!wishlist);
        if (!wishlist) {
            const product = {
                name: data.products.name,
                price: data.products.price, 
                id: data.products.id,
                 slug: data.products.slug,
                image_url: data.image_url || data.products.images[0].image_url,
            };
            dispatch(byToFav(product));
            Alert.alert(
                "Toast Notification",
                "Add wishlist successfully",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        } else {
            dispatch(DeleteFav(data.id));
        }
    };
    if (loading) {
        return <Loading />
    }
    return (
        <View className="relative h-full">
            <ScrollView ref={topRef}>
                <View className="h-full bg-[#fbeded]  relative">
                    <View className=" pt-14 px-5">
                        <View className="flex mb-2  justify-between flex-row items-center">
                            <View>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Icon2 name="chevron-back" size={30} color="black"></Icon2>
                                </TouchableOpacity>
                            </View>
                            <View className="flex flex-row gap-5 items-center">
                                <TouchableOpacity
                                    onPress={handleWishList}
                                    className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center "
                                >
                                    <Heart
                                        name="heart"
                                        size={20}
                                        color={wishlist ? "red" : "black"}
                                    />
                                </TouchableOpacity>
                                <View className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center ">
                                    <Icon name="sharealt" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                        <ImageSlider data={data.products} />
                    </View>
                    <View className=" p-5 rounded-[50px] mb-20 mt-5 bg-white">
                        <DetailContent data={data.products} />
                        <Comment />
                        <LayoutProductHome
                            handleToTop={handleToTop}
                            data={data.categories}
                            label={"Featured Products"}
                        />
                    </View>
                </View>
            </ScrollView>
            <CartBottom data={data.products} />
        </View>
    );
};

export default DetailProductScreen;
