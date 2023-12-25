import { Button, Image, ScrollView, Text, View } from "react-native";
import product1 from "../../../assets/products/image-5.png";
import product3 from "../../../assets/products/image-7.png";
import product2 from "../../../assets/products/image-6.png";
import React, { useEffect, useState } from "react";
import LayoutProductHome from "../../components/products/LayoutProductHome"
import { getRequest } from "../../api/request";
import Header from "./Header";
import Search from "./Search";
import Categories from "./Categories";
import Banner from "./Banner";
import Bestseller from "./Bestseller";
import News from "./News";
import Slider from "./Slider";
import { Loading } from "../../components/common";
import { useFetchDataHome } from "../../hook";

const HomeScreen = () => {
    const { data, loading } = useFetchDataHome()
    if (loading) {
        return <Loading />;
    }
    return (
        <View className="pt-10 px-5 relative  bg-[#f6faff]">
            <Header></Header>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Search />
                <Slider />
                <Categories />
                <LayoutProductHome data={data.featured} label={"Featured Products"} />
                <Banner
                    label={"C02 - Cable Multifuntion"}
                    image={product1}
                    color={"#04b624"}
                />
                <LayoutProductHome data={data.top_selling} label={"Best Sellers"} />
                <Banner
                    label={"Modular Headphone"}
                    image={product2}
                    color={"#233ad1"}
                />
                <LayoutProductHome data={data.laptop} label={"Laptop"} />
                <LayoutProductHome data={data.mobile} label={"Smart Phone"} />
                <LayoutProductHome data={data.accessory} label={"New accessory"} />
                <News data={data.posts} />
                <View className="h-[100px] "></View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
