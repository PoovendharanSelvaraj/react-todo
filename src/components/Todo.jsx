import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    todo !== ""
      ? setTodos([...todos, { id: Date.now(), value: todo }])
      : alert(`Enter string`);
    setTodo("");
  };
  const onDelete = (id) => {
    let newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} onDelete={onDelete} />
      ))}

      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="Enter string"
      />
      <button onClick={handleClick}>+</button>
    </div>
  );
};
