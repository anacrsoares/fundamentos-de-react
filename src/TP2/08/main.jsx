import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div className="solucao">
      <Header />
      <Home />
    </div>
  </React.StrictMode>
);
