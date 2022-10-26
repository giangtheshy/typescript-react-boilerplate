import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { get } from "../../apis";
import { UserType } from "../../types/user.type";
import { setUser } from "../actions/user.action";
import { RootState } from "../reducers";

import { GET_USER } from "../types";

export function* getUser() {
  try {
    const user: UserType = yield select((state: RootState) => state.user.user);
    const socketId = 666;
    const { data } = yield call(get, `/user/info/${socketId}`);

    yield put(setUser({ username: data.user.username }));
  } catch (error) {
    console.log(error);
  }
}

// ======watcher===========
function* watcherUsers() {
  yield takeLatest(GET_USER, getUser);
}

export function* userSaga() {
  yield all([watcherUsers()]);
}
