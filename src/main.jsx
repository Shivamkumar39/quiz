import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Global styles

// Get root element
const rootElement = document.getElementById("root");

// Create and render the React app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

