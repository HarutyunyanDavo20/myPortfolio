import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1";

export const api = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    contentType: "application/json",
    accept: "application/json, text/plain, */*",
  },
});

const successResponse = (response) => response;

const errorResponse = (error) => Promise.reject(error);

api.interceptors.response.use(successResponse, errorResponse);
