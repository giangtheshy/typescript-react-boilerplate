import { ProductType } from "../../types/product.type";
import { GET_PRODUCT, GET_PRODUCTS, SET_PRODUCT, SET_PRODUCTS } from "../types";

export const setProducts = (products: ProductType[]) => ({ type: SET_PRODUCTS, payload: products });
export const setProduct = (product: ProductType) => ({ type: SET_PRODUCT, payload: product });
export const getProducts = (payload: string) => ({ type: GET_PRODUCTS, payload });
export const getProduct = (payload: string) => ({ type: GET_PRODUCT, payload });
