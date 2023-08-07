import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { initLocalization } from "./localization";

import "bootstrap/dist/css/bootstrap.min.css";

initLocalization();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
