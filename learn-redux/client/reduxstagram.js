// Packages
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import { Main } from "./components/Main";

// Redux store
import { store } from "./store";

// CSS
import "./styles/style.styl";


const rootElement = document.querySelector("#root")
const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
)

render(router, rootElement);