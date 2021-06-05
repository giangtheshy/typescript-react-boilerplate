import { ProductType } from "../../types/product.type";
import { GET_PRODUCTS, SET_PRODUCTS } from "../types";

export const setProducts = (products: ProductType) => ({ type: SET_PRODUCTS, payload: products });
export const getProducts = () => ({ type: GET_PRODUCTS });
