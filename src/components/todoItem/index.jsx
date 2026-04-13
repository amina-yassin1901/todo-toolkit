import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/slices/todoSlice";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <p className={`${styles.text} ${todo.completed ? styles.completed : ""}`}>
        {todo.text}
      </p>

      <div className={styles.buttons}>
        <button
          className={styles.completeBtn}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button
          className={styles.deleteBtn}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
export default TodoItem;
