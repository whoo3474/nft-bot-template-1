import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const hasAccess = false;

render(
  <StrictMode>
    {hasAccess ? <BrowserRouter></BrowserRouter> : <LoginPage />}
  </StrictMode>,
  document.getElementById("root")
);
