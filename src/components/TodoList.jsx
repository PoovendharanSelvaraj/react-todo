import { useState } from "react";
import styles from "./Todo.module.css";
export const TodoList = ({ todo, onDelete, handleToggle }) => {
  return (
    <div className={styles.list} key={todo.id}>
      <h2 className={todo.status ? styles.finish : null}>{todo.value}</h2>
      <div className={styles.divin}>
        <input
          type="checkbox"
          onChange={(e) => {
            e.target.checked ? handleToggle(todo.id) : todo.status;
          }}
        />
        <button onClick={() => onDelete(todo.id)}>-</button>
      </div>
    </div>
  );
};
