import { useAuth } from "../../context/AuthContext";
import { Button } from "../ui/button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 border-b flex justify-between">
      <h1 className="text-xl font-bold">Todos App</h1>
      {user && <Button onClick={logout}>Logout</Button>}
    </nav>
  );
}
