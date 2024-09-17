export default function ToDoItem({
  taskItem,
  indexItem,
  onDelete,
  onCheck,
  classCheck,
}) {
  return (
    <div id={indexItem} className={`list-item ${classCheck}`}>
      <li>{taskItem}</li>

      <div className="buttons">
        <button onClick={onCheck}>✓</button>
        <button onClick={onDelete}>X</button>
      </div>
    </div>
  );
}
