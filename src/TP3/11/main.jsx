import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/ToDoList.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 11 - Renderização Condicional</h1>
      <p>
        No componente TodoItem, adicione a funcionalidade para alternar entre a
        exibição do texto da tarefa e um campo de entrada para editar a tarefa
        quando um botão "Editar" é clicado. Instruções: Implemente a
        renderização condicional no componente TodoItem para alternar entre a
        exibição do texto da tarefa e um campo de entrada quando o botão
        "Editar" é clicado. Garanta que a tarefa seja atualizada conforme o
        usuário edita o campo de entrada.
      </p>
    </div>

    <div className="solucao">
      <h2>Lista de Tarefas</h2>
      <ToDoList />
    </div>
  </React.StrictMode>
);
