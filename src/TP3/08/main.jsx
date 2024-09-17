import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/ToDoList.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 8 - Lidando com Múltiplos Estados</h1>
      <p>
        Expanda o componente TodoList para permitir adicionar novas tarefas
        através de um campo de entrada e um botão "Adicionar". Cada nova tarefa
        adicionada deve ser exibida na lista. Instruções: Implemente a lógica
        para adicionar novas tarefas ao estado do componente TodoList quando o
        botão "Adicionar" for clicado, e exiba as novas tarefas na lista.
      </p>
    </div>

    <div className="solucao">
      <h2>Lista de Tarefas</h2>
      <ToDoList />
    </div>
  </React.StrictMode>
);
