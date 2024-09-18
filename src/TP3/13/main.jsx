import React from "react";
import ReactDOM from "react-dom/client";
import { currentTemperature } from "./components/mock";
import Temperature from "./components/Temperature";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 13 - Renderização Condicional com Operador Ternário</h1>
      <p>
        Crie um componente chamado Temperature que exiba "Está quente!" se a
        temperatura for maior que 25 graus Celsius e "Está frio!" caso
        contrário. Instruções: Implemente o componente Temperature para exibir
        "Está quente!" se a temperatura passada como prop for maior que 25 graus
        Celsius. Caso contrário, exiba "Está frio!".
      </p>
    </div>

    <div className="solucao">
      <Temperature showTemperature={currentTemperature} />
    </div>
  </React.StrictMode>
);
