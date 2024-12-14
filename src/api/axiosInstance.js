import { clearAuth, updateAccessToken } from "@/store/slices/auth/slice";
import { store } from "../store/store";
import axios from "axios";

export const backendEndpoint = "http://localhost:8000";

export const axiosInstanceAuth = axios.create({
  baseURL: `${backendEndpoint}/api/auth`,
  withCredentials: false,
});

const getAccessToken = () => store.getState().auth.accessToken;
export const $api = axios.create({
  baseURL: `${backendEndpoint}/api`,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

axiosInstanceAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `${backendEndpoint}/api/auth/refresh`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        store.dispatch(updateAccessToken(response.data.access_token));
        return $api.request(originalRequest);
      } catch (e) {
        console.log("aper>>");
        console.log(e);
      }
    }
    if (error.response.status === 401) {
      console.log("aper>>");
      store.dispatch(clearAuth());
    }
    throw error;
  }
);
