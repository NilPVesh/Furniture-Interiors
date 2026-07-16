import axiosInstance from "../../services/axiosInstance";

export const loginUserCredentials = async (credentials) => {
    const response = await axiosInstance.post(
        "/auth/login",
        credentials
    );
    localStorage.setItem(
        "token",
        response.data.token
    );
    return response.data;
}

export const registerUserCred = async (credentials) => {
    const response = await axiosInstance.post(
        "/auth/register",
        credentials
    );
    return response.data;
}