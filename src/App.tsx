import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderCustom from "./components/Header/HeaderCustom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Posts from "./pages/Posts/Posts";
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <main>
      <Router>
        <HeaderCustom />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </main>
  );
};

export default hot(App);
