import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "yonghun",
  email: "yosiyong@gmail.com",
  address: "松戸"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
