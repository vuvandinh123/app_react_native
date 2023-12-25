import { useCallback, useState } from "react";
import { getRequest } from "../api/request";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";

export function useFetchProductDetail(slug) {
    const [data, setData] = useState({ products: [], categories: [] });
    const [loading, setLoading] = useState(false);
    const { favAr } = useSelector((state) => state.favorite);
    const [wishlist, setWishLish] = useState(false);

    useFocusEffect(
        useCallback(() => {

            const checkWishList = (id) => {
                const isFav = favAr.find((e) => e.id === id);
                if (!isFav) {
                    return false;
                }
                return true;
            };
            const fetch = async () => {
                setLoading(true);
                const res = await getRequest(`/products/${slug}`);
                if (checkWishList(res.id)) {
                    setWishLish(true);
                }
                const res2 = await getRequest(`/products/categories/${res.category_id}`);
                setData({
                    ...data,
                    products: res,
                    categories: res2
                })
                setLoading(false);
            };
            fetch();
        }, [slug])
    );
    return {
        data,
        loading,
        wishlist,
        setWishLish
    }
}