import { GET_USER, SET_LOGIN, SET_TOKEN, SET_USER } from "../types";

export const setUser = (user: any) => ({ type: SET_USER, payload: user });

export const getUser = () => ({ type: GET_USER });

export const setToken = (token: string) => ({ type: SET_TOKEN, payload: token });

export const setLogin = (status: boolean) => ({ type: SET_LOGIN, payload: status });
