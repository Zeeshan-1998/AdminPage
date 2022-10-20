import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// New method for version React 18 using react-dom/client { createRoot } component //

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
