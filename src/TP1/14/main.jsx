import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import CartaoPerfil from "./CartaoPerfil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <CartaoPerfil />
  </React.StrictMode>
);
