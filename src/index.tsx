import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.less";

import "./less/index.less";
import App from "./App";
import store from "./store/store";
import CustomThemeApp from "./components/Custom/themes/CustomThemeApp";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CustomThemeApp>
        <App />
      </CustomThemeApp>
    </Provider>
  </StrictMode>,
  document.getElementById("app"),
);
