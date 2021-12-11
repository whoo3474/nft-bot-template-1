import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

render(
  <StrictMode>
    <BrowserRouter></BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
