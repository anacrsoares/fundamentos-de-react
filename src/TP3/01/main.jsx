import React from "react";
import ReactDOM from "react-dom/client";
import Greetings from "./App.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greetings name="João" />
    <Greetings name="Maria" />
    <Greetings name="Manoel" />
    <Greetings name="José" />
  </React.StrictMode>
);
