import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
