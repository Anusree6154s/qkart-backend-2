import "antd/dist/antd.css";
import React, { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Checkout from "./components/Checkout";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import Search from "./components/Search";

import Thanks from "./components/Thanks";

<<<<<<< HEAD
// import ipConfig from "./ipConfig.json";
=======
import ipConfig from "./ipConfig.json";
>>>>>>> backend

export const config = {
  endpoint: `https://qkart-backend-2-jlz8.onrender.com/v1`,
  // endpoint: `http://${ipConfig.workspaceIp}:8082/v1`,
};

<<<<<<< HEAD
=======

>>>>>>> backend
export default function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/products">
          <Search />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/thanks">
          <Thanks />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
