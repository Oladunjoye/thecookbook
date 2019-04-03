import React from "react";
import ReactDOM from "react-dom";

import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);
