import axiosClient from "./axiosClient";

export const apiGetAccountSettingBillingData = async () => {
    try {
        const response = await axiosClient.get('/path/to/your/api/endpoint');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch billing data');
    }
};