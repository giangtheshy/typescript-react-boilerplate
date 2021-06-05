import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas";
import { reducers } from "./reducers";

const saga = createSagaMiddleware();
const middleware = [saga];
const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
saga.run(rootSaga);
export default store;
