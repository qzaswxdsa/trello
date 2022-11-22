import React from "react";
import ReactDOM from "react-dom/client";
import AuthorizationApp from "./authorization/authorizationApp";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <AuthorizationApp />
  </React.StrictMode>
);
