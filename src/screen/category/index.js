import React from "react";
import { ScrollView, View } from "react-native";
import { Loading, TopBar } from "../../components/common";
import Card from "./Card";
import { useFetchCategory } from "../../hook";
const CategoryScreen = () => {
    const { data, loading } = useFetchCategory()
    if (loading) {
        return <Loading />;
    }
    return (
        <View className="mt-10 mx-5">
            <TopBar title="Categories"></TopBar>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex mb-20  flex-row mt-5 flex-wrap">
                    {data.length > 0 &&
                        data.map((item, index) => <Card item={item} key={index} />)}
                </View>
            </ScrollView>
        </View>
    );
};

export default CategoryScreen;
