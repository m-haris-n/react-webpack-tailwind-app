import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

if (module.hot) {
  // Accept hot update
  module.hot.accept();
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
