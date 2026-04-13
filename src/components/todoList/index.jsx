import TodoItem from "../todoItem";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div>
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>Todo list is empty!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
export default TodoList;
