import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Card from "./Card/Card.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <div className="solucao">
      <Header />
      <Card />
      <Card />
      <Footer />
    </div>
  </React.StrictMode>
);
