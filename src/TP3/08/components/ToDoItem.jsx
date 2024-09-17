import { useState } from "react";

export default function ToDoItem({ taskItem, indexItem }) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleClick() {
    setIsCompleted(!isCompleted);
  }

  return (
    <div className={`list-item ${isCompleted ? "completed" : "pending"}`}>
      <li id={indexItem}>{taskItem}</li>
      <button onClick={() => handleClick()}>✓</button>
    </div>
  );
}
