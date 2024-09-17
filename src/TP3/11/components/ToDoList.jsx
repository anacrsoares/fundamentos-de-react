import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { TASKS } from "./mock";

export default function TodoList() {
  // const [newtasks, setNewTasks] = useState([...TASKS]);
  const [newtasks, setNewTasks] = useState(
    TASKS.map((task) => ({ title: task, completed: false }))
  );
  const [inputValue, setInputValue] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(null);

  // const [isCompleted, setIsCompleted] = useState(false);

  function handleCheck(index) {
    const updatedTasks = newtasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setNewTasks(updatedTasks);
  }

  function handleDelete(index) {
    const tasksFiltered = newtasks.filter(
      (_, indexDelete) => index !== indexDelete
    );
    setNewTasks(tasksFiltered);
  }

  function handleEdit(index) {
    setSelectedIndex(index);
    setInputValue(newtasks[index].title);
  }

  function submitEdited(event) {
    event.preventDefault();
    console.log(inputValue);

    const copyNewTasks = [...newtasks];
    copyNewTasks[selectedIndex].title = inputValue;

    setNewTasks(copyNewTasks);

    setInputValue("");
    setSelectedIndex(null);
  }

  function submitTask(event) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    setNewTasks([{ title: inputValue.trim(), completed: false }, ...newtasks]);

    setInputValue("");
    setSelectedIndex(null);
  }

  // useEffect(() => {
  //   console.log(newtasks);
  // }, [newtasks]);

  return (
    <div className="task-list">
      <form
        onSubmit={
          selectedIndex === null
            ? (event) => submitTask(event)
            : (event) => submitEdited(event)
        }
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
          <ToDoItem
            taskItem={task.title}
            indexItem={index}
            key={index}
            onDelete={() => handleDelete(index)}
            onCheck={() => handleCheck(index)}
            classCheck={task.completed ? "completed" : "pending"}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </ul>
    </div>
  );
}
