import { useEffect, useState } from "react";
import { getTodos } from "../../services/todo.service";
import { useAuth } from "../../context/AuthContext";

export default function TodoList() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos(user.uid).then(setTodos);
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="p-2 border-b">
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
