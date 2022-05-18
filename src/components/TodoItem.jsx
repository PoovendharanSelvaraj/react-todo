import { useState } from "react";
import styles from "./Todo.module.css";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className={styles.list} key={todo.id}>
      <h2>{todo.value}</h2>
      <div className={styles.divin}>
        <input type="checkbox" />
        <button onClick={() => onDelete(todo.id)}>-</button>
      </div>
    </div>
  );
};
