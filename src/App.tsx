import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <main>
      <Router>
        <h1>Home page</h1>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Product} />
        </Switch>
      </Router>
    </main>
  );
};

export default hot(App);
