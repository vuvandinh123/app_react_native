import React from "react";
import { ScrollView, Text, View } from "react-native";
import product1 from "../../../assets/products/image-7.png"
import product2 from "../../../assets/products/image-5.png"
import product3 from "../../../assets/products/image-6.png"
import Product from "../../components/common/Product";
import LayoutProductHome from "../../components/products/LayoutProductHome";
const Bestseller = () => {
  const data = [
    {
      id: 1,
      image: product1,
      price: 150.0,
      name: "TMA-2 HD Wireless",
    },
    {
      id: 2,
      image: product2,
      price: 200.0,
      name: "TMA-4 HD Wireless",
    },
    {
      id: 3,
      image: product3,
      price: 150.0,
      name: "TMA-2 HD Wireless",
    },
  ];
  return (
    <LayoutProductHome data={data} label={"Best Seller"}/>
  );
};

export default Bestseller;
