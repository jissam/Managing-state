import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, settasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // Track lil tasks as a state
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskList tasks={tasks} settasks={settasks} />
      <TaskForm tasks={tasks} settasks={settasks} />
    </>
  );
}

export default App;
