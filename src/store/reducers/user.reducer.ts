import { UserInit, UserType } from "../../types/user.type";
import { ActionRedux } from "../../types/redux.type";
import { GET_USER, SET_LOGIN, SET_TOKEN, SET_USER } from "../types";

interface StateUserInterface {
  user: UserType;
  token: string | "";
  isLogged: boolean;
}
const initStateUser: StateUserInterface = {
  user: UserInit,
  token: "",
  isLogged: false,
};
export default (state = initStateUser, { payload, type }: ActionRedux) => {
  switch (type) {
    case SET_LOGIN:
      return { ...state, isLogged: payload };
    case SET_USER:
      return { ...state, user: { ...state.user, ...payload } };
    case SET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};
