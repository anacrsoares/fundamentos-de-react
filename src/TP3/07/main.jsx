import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/ToDoList.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 7 - Atualizando Estado de Forma Condicional</h1>
      <p>
        Modifique o componente TodoItem para adicionar um botão "Concluir" ao
        lado de cada tarefa. Quando este botão for clicado, a tarefa deve ser
        marcada como concluída, alterando visualmente sua aparência. Instruções:
        Adicione a funcionalidade ao botão "Concluir" para atualizar o estado da
        tarefa no componente TodoItem, refletindo visualmente que a tarefa foi
        concluída.
      </p>
    </div>

    <div className="solucao">
      <h2>Lista de Tarefas</h2>
      <ToDoList />
    </div>
  </React.StrictMode>
);
