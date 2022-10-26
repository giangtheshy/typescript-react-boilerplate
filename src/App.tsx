import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { get } from "./apis";
import CheckLogin from "./components/Custom/CheckLogin";
import HeaderCustom from "./components/Header/HeaderCustom";
import LayoutAdmin from "./components/Layout/LayoutAdmin";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts/Posts";
import { getUser, setLogin, setToken } from "./store/actions/user.action";
import { RootState } from "./store/reducers";

const App = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const token = useSelector((state: RootState) => state.user.token);

  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      (async () => {
        try {
          const { data } = await get("/user/refresh_token");
          if (data.access_token) {
            dispatch(setToken(data.access_token));
            dispatch(setLogin(true));
          } else {
            localStorage.removeItem("firstLogin");
          }
        } catch (error) {
          localStorage.removeItem("firstLogin");
        }
      })();
    }
  }, [isLogged, dispatch]);
  useEffect(() => {
    if (token && isLogged) {
      dispatch(getUser());
    }
  }, [token, isLogged, dispatch]);
  return localStorage.getItem("firstLogin") ? (
    <main>
      <Router>
        <HeaderCustom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<CheckLogin />} />
        </Routes>
      </Router>
    </main>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutAdmin><Login /></LayoutAdmin>} />
        <Route path="*" element={<CheckLogin />} />
      </Routes>
    </Router>
  );
};

export default hot(App);
