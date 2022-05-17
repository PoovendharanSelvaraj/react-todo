import { useState } from "react";

export const TodoItem = (props) => {
  const [isComplete, setComplete] = useState(props.isComplete);
};
