import axiosClient from "./axiosClient";
export const historyOrderAPI = {
    historyOrder: () => axiosClient.get('/api/v1/bill'),
}
