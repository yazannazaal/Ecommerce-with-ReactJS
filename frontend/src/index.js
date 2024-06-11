import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./RTK/productStore/sotre";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
