import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 5 - Manipulando o Estado com Funções</h1>
      <p>
        No componente Counter (implementado na Questão 2), adicione um botão
        chamado "Reset" que, quando clicado, redefine o contador para 0.
        Instruções: Adicione uma função ao componente Counter que redefine o
        estado do contador para 0. Implemente um botão "Reset" que, ao ser
        clicado, aciona a função para redefinir o contador para 0.
      </p>
    </div>

    <Counter />
  </React.StrictMode>
);
