import { MdDelete, MdEdit } from "react-icons/md";
import "./Todo.css";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {

  return (
    // <div className="todo completed">
    todo.isEditing ? (
      <EditForm todo={todo} editTodo={editTodo}/>
    ) : (
      <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
        <p
          onClick={() => {
            toggleCompleted(todo.id);
          }}
        >
          {todo.content}
        </p>
        <div>
          <MdEdit
            onClick={() => {
              toggleIsEditing(todo.id);
            }}
            style={{ cursor: "pointer" }}
          />
          <MdDelete
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="delete-icon"
          />
        </div>
      </div>
    )
  );
}

export default Todo;
