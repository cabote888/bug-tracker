import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import ManageTeam from "./components/Team/ManageTeam";
import BugTable from "./components/Bugs/BugTable";
import Profile from "./components/Profile/Profile";

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
        <Route path="/" element={<Dashboard severityArray={severity} />} />
        <Route
          path="/bugTable"
          element={<BugTable bugsArray={bugsList} membersArray={teamMembers} />}
        />
        <Route
          path="/manageTeam"
          element={<ManageTeam newMembers={membersList} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
