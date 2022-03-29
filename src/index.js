import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { compose, createStore } from "redux";
import MainReducer from "./reducers/MainReducer";
import CreateTodo from "./containers/CreateTodo";
import Table from "./containers/Table";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();