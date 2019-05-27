// Packages
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import { ConnectedMain } from "./components/App";

// Redux store
import { store } from "./store";

// CSS
import "./styles/style.styl";


const rootElement = document.querySelector("#root")
const router = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      {/* <Main /> now has access to the redux store! */}
      <ConnectedMain />
    </BrowserRouter>
  </Provider>
)

render(router, rootElement);