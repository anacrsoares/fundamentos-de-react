import React from "react";
import ReactDOM from "react-dom/client";
import DisplayCount from "./DisplayCount.jsx";
import Counter from "./Counter";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 4 - Utilizando Estado em Componentes Filhos</h1>{" "}
      <p>
        Modifique o componente Counter criado na Questão 2 para passar o valor
        do contador como uma prop chamada count para um novo componente
        funcional chamado DisplayCount. Este novo componente deve apenas exibir
        o valor recebido como prop. Instruções: Crie o componente DisplayCount
        que aceita a prop count e exibe seu valor. Atualize o componente Counter
        para passar o valor do contador para o componente DisplayCount como uma
        prop count.
      </p>
    </div>

    <div className="solucao">
      <Counter />
    </div>
  </React.StrictMode>
);
