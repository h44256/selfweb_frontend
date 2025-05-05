import TodoWrapper from "../components/TodoWrapper";
import styles from "../css/TodoList.module.css";

function TodoList() {
  return (
    <div className={styles.todoPage}>
      <TodoWrapper />;
    </div>
  );
}

export default TodoList;
