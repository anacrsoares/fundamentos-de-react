import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { TASKS } from "./mock";

export default function TodoList() {
  const [newtasks, setNewTasks] = useState([...TASKS]);
  const [inputValue, setInputValue] = useState("");

  function submitTask(event) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    setNewTasks([inputValue.trim(), ...newtasks]);

    setInputValue("");
  }

  useEffect(() => {
    console.log(newtasks);
  }, [newtasks]);

  return (
    <div className="task-list">
      <form
        onSubmit={(event) => submitTask(event)}
        className="container-input-task"
      >
        <input
          placeholder="Digite a nova tarefa"
          type="text"
          className="input-task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {newtasks.map((task, index) => (
          <ToDoItem taskItem={task} indexItem={index} key={index} />
        ))}
      </ul>
    </div>
  );
}
