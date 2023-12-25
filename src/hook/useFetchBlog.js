import { useFocusEffect } from "@react-navigation/native";
import { getRequest } from "../api/request";
import { useCallback, useState } from "react";

export function useFetchBlog() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                setLoading(true);
                const res = await getRequest("/post");
                setData(res.data.data);
                setLoading(false);
            };
            fetchData();
        },[])
    )
    return { data, loading }
}