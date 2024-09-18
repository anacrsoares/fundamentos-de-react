import React from "react";
import ReactDOM from "react-dom/client";
import List from "./components/List";
import { randomNumberList } from "./components/mock";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 12 - Renderização Condicional com Elementos em Lista</h1>
      <p>
        Crie um componente chamado List que recebe uma lista de números como
        propriedade. Renderize uma lista contendo elementos para cada número. Se
        a lista estiver vazia, exiba uma mensagem informando que a lista está
        vazia. Instruções: Implemente o componente List para renderizar uma
        lista contendo elementos para cada número da lista. Se a lista estiver
        vazia, exiba a mensagem "A lista está vazia".
      </p>
    </div>

    <div className="solucao">
      <List numberList={randomNumberList} />
    </div>
  </React.StrictMode>
);
