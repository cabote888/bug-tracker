import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import ManageTeam from "./ManageTeam";
import BugTable from "./BugTable";
import Profile from "./Profile";

function App() {
  const bugsList = [
    {
      description: "Like button not working.",
      developer: "Magdalene",
      severity: "Critical",
      id: Math.random(),
    },
    {
      description: "Fix bug in line 43.",
      developer: "Cain",
      severity: "Moderate",
      id: Math.random(),
    },
  ];

  const [teamMembers, setTeamMembers] = useState(() => {
    const localNames = localStorage.getItem("teamMembers");
    return localNames ? JSON.parse(localNames) : [];
  });

  function membersList(members) {
    setTeamMembers(members);
  }

  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  return (
    <>
      <Sidebar />
      <Routes className="">
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/bugTable"
          element={<BugTable bugsArray={bugsList} membersArray={teamMembers} />}
        />
        <Route
          path="/manageTeam"
          element={<ManageTeam newMembers={membersList}/>}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
