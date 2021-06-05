import axios from "./axios";
axios.defaults.withCredentials = true;

export const getProductsApi = () => axios.get("/products/getProducts");
