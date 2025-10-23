import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // si tu veux ajouter un style global

// Point d'entrée principal de l'application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
