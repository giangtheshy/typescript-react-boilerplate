import { ProductType } from "../../types/product.type";
import { ActionRedux } from "../../types/redux.type";
import { SET_PRODUCT, SET_PRODUCTS } from "../types";

interface StateProductInterface {
  products: ProductType[] | undefined;
  product: ProductType | undefined;
}
const initStateProduct: StateProductInterface = {
  products: [],
  product: undefined,
};
export default (state = initStateProduct, { payload, type }: ActionRedux) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};
