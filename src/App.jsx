import { useState } from "react";
import "./App.css";
import BugForm from "./BugForm";
import BugTable from "./BugTable";
import NavBar from "./Navbar";

function App() {

  const bugsList = [
    {
      description: "Like button not working.",
      developer: "Magdalene",
      severity: "Critical ⚠️",
      id: Math.random(),
    },
    {
      description: "Fix bug in line 43.",
      developer: "Cain",
      severity: "Moderate",
      id: Math.random(),
    },
  ];

  const [bugs, setBugs] = useState(bugsList);

  function newBugHandler(bug) {
    setBugs((prevBug) => {
      return [bug, ...prevBug];
    });
  }

  function handleDelete(bugId) {
    const filteredBugs = bugs.filter((bug) => bug.id !== bugId);
    setBugs(filteredBugs)
  }

  return (
    <div className="App">
      <NavBar/>
      <BugForm onAddNewBug={newBugHandler} />
      <BugTable bugs={bugs} onDeleteBug={handleDelete} />
    </div>
  )
}

export default App
