import { useState } from "react";
import styles from "./Todo.module.css";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const handleClick = () => {
    todo !== ""
      ? setTodos([...todos, { id: Date.now(), status: false, value: todo }])
      : alert(`Enter string`);
    setTodo("");
  };
  const onDelete = (id) => {
    let newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  const handleToggle = (id) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updateTodos);
  };
  return (
    <div className={styles.container}>
     {todos
        .filter((todo) => (showAll ? true : !todo.status))
        .map((todo) => (
          <TodoList
            key={todo.id}
            handleToggle={handleToggle}
            todo={todo}
            onDelete={onDelete}
          />
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
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Unfinished only" : "Show all"}
        </button>
      </div>
    </div>
  );
};
