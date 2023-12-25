import { useCallback, useState } from "react";
import { getRequest } from "../api/request";
import { useFocusEffect } from "@react-navigation/native";

export function useFetchCategory() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                setLoading(true);
                const res = await getRequest("/categories", { limit: 20 });
                setData(res.data.data);
                setLoading(false);
            };
            fetchData();
        }, [])
    );
    return {
        data,
        loading
    }
}