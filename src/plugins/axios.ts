import axios, { AxiosInstance } from "axios";;
import { sweetToastError, sweetToastSuccess } from './swal';

declare global {
    interface Window { axios: AxiosInstance }
}

export const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL as string,
    timeout: 15000,
});

const handleSuccessResponse = (response: any) => {
    if (response.data.message) {
        sweetToastSuccess(response.data.message);
    }

    return response;
};

const handleErrorResponse = (error: any) => {
    if (error.response.data.message) {
        sweetToastError(error.response.data.message);
    }

    return Promise.reject(error.response.data.errors);
};

instance.interceptors.response.use(handleSuccessResponse, handleErrorResponse);


window.axios = instance;