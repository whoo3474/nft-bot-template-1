import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ApplicationLayout } from "./layouts/ApplicationLayout/ApplicationLayout";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const hasAccess = true;

render(
  <StrictMode>
    {hasAccess ? (
      <BrowserRouter>
        <ApplicationLayout />
      </BrowserRouter>
    ) : (
      <LoginPage />
    )}
  </StrictMode>,
  document.getElementById("root")
);
