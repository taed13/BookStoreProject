import axiosClient from "./axiosClient";
export const historyOrderAPI = {
  historyOrder: () => axiosClient.get("/bill"),
};
