import React from "react";

// import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { createLogger } from "redux-logger";

import App from "./App";
import reducer from "./reducers";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById("root")
);
