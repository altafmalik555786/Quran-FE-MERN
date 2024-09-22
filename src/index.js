import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import store from "./app/store";
import global from "../src/styles/global.css"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
