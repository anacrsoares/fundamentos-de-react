import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import Header from "./Header/Header.jsx";
import Home from "./Home/Home.jsx";
import Who from "./Who/Who.jsx";
import Products from "./Products/Products.jsx";
import Contact from "./Contact/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div className="solucao">
      <Header />
      <Home />
      <Who />
      <Products />
      <Contact />
    </div>
  </React.StrictMode>
);
