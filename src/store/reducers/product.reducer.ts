import { ProductType } from "../../types/product.type";
import { SET_PRODUCTS } from "../types";

interface ActionInterface {
  payload: any;
  type: string;
}
interface StateProductInterface {
  products: ProductType[] | undefined;
  product: ProductType | undefined;
}
const initStateProduct = {
  products: [],
  product: undefined,
};
export default (state = initStateProduct, { payload, type }: ActionInterface) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
