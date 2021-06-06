import { all, call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../apis";
import { ActionRedux } from "../../types/redux.type";

import { setProduct, setProducts } from "../actions/product.action";
import { GET_PRODUCT, GET_PRODUCTS } from "../types";

export function* getProducts({ payload }: ActionRedux) {
  try {
    const { data } = yield call(get, `/products/${payload}`);
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}
export function* getProduct({ payload }: ActionRedux) {
  try {
    const { data } = yield call(get, `/products/${payload}`);
    yield put(setProduct(data));
  } catch (error) {
    console.log(error);
  }
}

// ======watcher===========
function* watcherProducts() {
  yield takeLatest(GET_PRODUCTS, getProducts);
  yield takeLatest(GET_PRODUCT, getProduct);
}

export function* productSaga() {
  yield all([watcherProducts()]);
}
