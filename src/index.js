import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
