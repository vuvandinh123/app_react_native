import React, { useState } from "react";
import { ButtonBack, Product, TopBar } from "../../components/common";
import { ScrollView, Text, View } from "react-native";
import { getRequest } from "../../api/request";
import { useNavigation } from "@react-navigation/native";

const ProductByCategryScreen = ({route}) => {
  const [data,setData] = useState([])
  const {id,name} = route.params
  React.useEffect(() => {
    const fetch = async () => {
      
      const res = await getRequest(`/products/categories/${id}`);
      setData(res);
    };
    fetch();
  }, [id]);
  return (
    <View className="h-full px-5 mt-10">
      <TopBar title={name}></TopBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row flex-wrap mb-20">
          {data.length > 0 &&
            data.map((item) => {
              return <Product layout={true} key={item.id} data={item} />;
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductByCategryScreen;
