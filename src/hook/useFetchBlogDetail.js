import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getRequest } from "../api/request";

export function useFetchBlogDetail(slug) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                setLoading(true);
                const res = await getRequest("/post/" + slug);
                setData(res.data);
                setLoading(false);
            };
            fetchData();
        }, [])
    )
    return { data, loading }
}