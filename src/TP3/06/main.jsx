import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/ToDoList.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 6 - Componentização Avançada</h1>
      <p>
        Crie um componente chamado TodoList que exibe uma lista de tarefas. Cada
        tarefa deve ser representada por um componente funcional chamado
        TodoItem, que recebe uma prop chamada task contendo o texto da tarefa.
        Instruções: Implemente os componentes TodoList e TodoItem, onde TodoList
        renderiza múltiplos TodoItems com diferentes tarefas passadas como
        props.
      </p>
    </div>

    <div className="solucao">
      <h2>Lista de Tarefas</h2>
      <ToDoList />
    </div>
  </React.StrictMode>
);
