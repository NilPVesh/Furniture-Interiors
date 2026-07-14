import axiosInstance from "../../services/axiosInstance";

export const getProducts = async () => {
    const response = await axiosInstance.get('/products');
    return response.data;
};