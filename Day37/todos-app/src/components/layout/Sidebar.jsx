import TodoList from "../todos/TodoList";

export default function Sidebar() {
  return (
    <aside className="w-1/4 border-r p-4">
      <TodoList />
    </aside>
  );
}
