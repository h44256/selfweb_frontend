import styles from "./TodoList.module.css";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const getInitialTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos
    ? JSON.parse(storedTodos)
    : [
        // {
        //   content: "",
        //   id: Math.random(),
        //   isCompleted: false,
        //   isEditing: false,
        // },
        // {
        //   content: "寫作業",
        //   id: Math.random(),
        //   isCompleted: false,
        //   isEditing: false,
        // },
      ];
};

function TodoWrapper() {
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const [todos, setTodos] = useState([
  //   {
  //     content: "打掃廁所",
  //     id: Math.random(),
  //     isCompleted: false,
  //     isEditing: false,
  //   },
  //   {
  //     content: "寫作業",
  //     id: Math.random(),
  //     isCompleted: false,
  //     isEditing: false,
  //   },
  // ]);
  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        content: content,
        id: Math.random(),
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
