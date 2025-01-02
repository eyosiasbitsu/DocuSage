import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from 'react-dom/client';
import "./styles/styles.css"; // Include global styles if necessary
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
