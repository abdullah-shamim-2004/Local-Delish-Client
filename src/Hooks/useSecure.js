import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

//axios instance.
export const api = axios.create({
  baseURL: "https://local-delish-server.vercel.app/",
  // baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// It will add a token in headers of authorization, but i do not implinent it in server side , because it doesn't have in my requirement. Thank you.
const useSecure = () => {
  const { user } = useAuth();
  const token = user?.accessToken;

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

  return api;
};

export default useSecure;
