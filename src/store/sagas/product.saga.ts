import { all, call, put, takeLatest } from "redux-saga/effects";
import { getProductsApi } from "../../apis";
import { setProducts } from "../actions/product.action";
import { GET_PRODUCTS } from "../types";

export function* getProducts() {
  try {
    const { data } = yield call(getProductsApi);
    yield put(setProducts(data));
  } catch (error) {
    console.log(error);
  }
}

// ======watcher===========
function* watcherProducts() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}

export function* productSaga() {
  yield all([watcherProducts()]);
}
