import styles from "./styles.module.css";
import TodoList from "../todoList";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
import { useState } from "react";
function Todo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter new todo"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
      <TodoList />
    </div>
  );
}
export default Todo;
