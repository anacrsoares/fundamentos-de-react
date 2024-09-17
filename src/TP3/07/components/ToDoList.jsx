import { useState } from "react";
import ToDoItem from "./ToDoItem";
import { TASKS } from "./mock";

export default function TodoList() {
  return (
    <div className="task-list">
      <ul>
        {TASKS.map((task, index) => (
          <ToDoItem  taskItem={task} indexItem={index} />
        ))}
      </ul>
    </div>
  );
}
