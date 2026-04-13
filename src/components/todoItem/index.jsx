import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/slices/todoSlice";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </p>

      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
}
export default TodoItem;
