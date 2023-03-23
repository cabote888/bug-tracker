import { useState } from "react";
import "./App.css";
import BugForm from "./BugForm";
import BugTable from "./BugTable";

function App() {

  const bugsList = [
    {
      description: "Like button not working.",
      developer: "Magdalene",
      severity: "Critical ⚠️",
    },
    {
      description: "Fix bug in line 43.",
      developer: "Cain",
      severity: "Moderate",
    },
  ];

  const [bugs, setBugs] = useState(bugsList);

  function newBugHandler(bug) {
    setBugs((prevBug) => {
      return [bug, ...prevBug];
    });
  }

  return (
    <div className="App">
      <BugForm onAddNewBug={newBugHandler}/>
      <BugTable bugs={bugs} />
    </div>
  )
}

export default App
