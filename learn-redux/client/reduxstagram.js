// Packages
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Components
import { Main } from "./components/Main";

// CSS
import "./styles/style.styl";


const rootElement = document.querySelector("#root")
const router = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

render(router, rootElement);