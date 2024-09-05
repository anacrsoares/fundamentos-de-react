import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import SobreMim from "./components/About/SobreMim.jsx";
import "./main.css";
import Habilities from "./components/Habilities/Habilities.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Companies from "./components/Companies/Companies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="solucao">
      <Header />
      <SobreMim />
      <Habilities />
      <Companies />
      <Projects />
      <Contact />
    </div>
  </React.StrictMode>
);
