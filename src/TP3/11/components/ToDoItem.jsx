import { CiEdit } from "react-icons/ci";

export default function ToDoItem({
  taskItem,
  indexItem,
  onDelete,
  onCheck,
  classCheck,
  onEdit,
}) {
  return (
    <div id={indexItem} className={`list-item ${classCheck}`}>
      <li>{taskItem}</li>

      <div className="buttons">
        <button onClick={onCheck}>✓</button>
        <button onClick={onDelete}>X</button>
        <button onClick={onEdit}>
          <CiEdit />
        </button>
      </div>
    </div>
  );
}
