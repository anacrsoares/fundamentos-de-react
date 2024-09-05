import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import SobreMim from "./components/About/SobreMim.jsx";
import "./main.css";
import Habilities from "./components/Habilities/Habilities.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="solucao">
      <Header />
      <SobreMim />
      <Habilities />
    </div>
  </React.StrictMode>
);
