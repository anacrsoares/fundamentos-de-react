import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/ToDoList.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 10 - Lidando com Eventos Personalizados</h1>
      <p>
        Adicione um evento personalizado ao componente TodoItem chamado
        onTaskDelete, que é acionado quando um botão "Excluir" ao lado de cada
        tarefa é clicado. Instruções: Implemente o evento personalizado
        onTaskDelete no componente TodoItem e acione-o quando o botão "Excluir"
        for clicado, passando a tarefa correspondente como argumento.
      </p>
    </div>

    <div className="solucao">
      <h2>Lista de Tarefas</h2>
      <ToDoList />
    </div>
  </React.StrictMode>
);
