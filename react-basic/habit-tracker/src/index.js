import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";

ReactDOM.render(
  // <React.StrictMode> => "use strict"와 같음
  //   <App />
  // </React.StrictMode>,
  <App />,
  document.getElementById("root")
);
