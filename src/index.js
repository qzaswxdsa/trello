import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./app";
import { Provider } from "react-redux";
import store from "./redux/store";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
      <Global />
    </Provider>
  </>
);
