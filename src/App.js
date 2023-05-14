import "./App.css";
import UserList from "./components/UserList";

function App() {
  const usersIt = [
    {
      content: "Frontend Misha",
      id: "fe",
      relations: ["pm", "be", "ds"],
    },
    {
      content: "Design Pasha",
      id: "ds",
      relations: ["pm", "fe"],
    },
    {
      content: "Project Manager Sanya",
      id: "pm",
      relations: ["ba", "fe", "be", "ds"],
    },
    {
      content: "Backend Grisha",
      id: "be",
      relations: ["pm", "fe", "ba"],
    },
    {
      content: "Business Analyst Sveta",
      id: "ba",
      relations: ["pm"],
    },
  ];

  return (
    <div className="App">
      <UserList users={usersIt} />
    </div>
  );
}

export default App;