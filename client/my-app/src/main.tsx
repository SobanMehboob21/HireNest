import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import App from "./App";
import "./styles/common.css";
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
