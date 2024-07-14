// import { store } from "store/store";
// import { clearAuth, updateAccessToken } from "store/slices/auth/slice";
import axios from "axios";

export const backendEndpoint = "http://localhost:3000";
// export const backendEndpoint = "";

export const axiosInstanceReview = axios.create({
  baseURL: `${backendEndpoint}/api/review`,
});

export const axiosInstanceBusiness = axios.create({
  baseURL: `${backendEndpoint}/api/business`,
});

export const axiosInstanceAuth = axios.create({
  baseURL: `${backendEndpoint}/api/auth`,
  withCredentials: true,
});

// const getAccessToken = () => store.getState().auth.accessToken;

export const $api = axios.create({
  baseURL: `${backendEndpoint}/api`,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(
//           `${backendEndpoint}/api/auth/refresh`,
//           {
//             withCredentials: true,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         store.dispatch(updateAccessToken(response.data.accessToken));
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log(e);
//       }
//     } else if (error.response.status === 401) {
//       store.dispatch(clearAuth());
//     }
//     throw error;
//   }
// );
