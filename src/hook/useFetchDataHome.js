import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getRequest } from "../api/request";

export function useFetchDataHome() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        news: [],
        featured: [],
        top_selling: [],
        laptop: [],
        posts: [],
        mobile: [],
        accessory:[]
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [res, res2, res3, res4, res5, res6, res7] = await Promise.all([
                getRequest("/products", { limit: 10 }),
                getRequest("/products/featured"),
                getRequest("/products/top_selling"),
                getRequest("/post"),
                getRequest("/products/categories/1", { limit: 10 }),
                getRequest("/products/categories/3", { limit: 10 }),
                getRequest("/products/categories/19", { limit: 10 }),

            ]);
            setData({
                news: res.data.data,
                featured: res2.data,
                top_selling: res3.data,
                posts: res4.data.data,
                laptop: res5,
                mobile: res6,
                accessory: res7
            });
            setLoading(false);
        };
        fetchData();
    }, []);

    return { data, loading };
}