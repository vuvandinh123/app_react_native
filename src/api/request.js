import axiosInstance from "./axiosInstanceConfig";

const getRequest = async (url, params, config) => {
    try {
        const response = await axiosInstance.get(url, { params, ...config });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
const postRequest = async (url, data,params, config) => {
    try {
        const response = await axiosInstance.post(url, data,{ params, ...config });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export {
    getRequest,
    postRequest
}