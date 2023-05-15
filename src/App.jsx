import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import ManageTeam from "./components/Team/ManageTeam";
import BugTable from "./components/Bugs/BugTable";
import Profile from "./components/Profile/Profile";

function App() {
  const [bugs, setBugs] = useState(() => {
    const savedBugs = JSON.parse(localStorage.getItem("bugs"));
    return (
      savedBugs || [
        {
          description: "Like button not working.",
          developer: "Magdalene",
          severity: "Critical",
          id: uuid(),
        },
        {
          description: "Fix bug in line 43.",
          developer: "Cain",
          severity: "Moderate",
          id: uuid(),
        },
      ]
    );
  });

  const [teamMembers, setTeamMembers] = useState(() => {
    const localNames = localStorage.getItem("teamMembers");
    return localNames ? JSON.parse(localNames) : [];
  });

  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  function newMember(member) {
    setTeamMembers((prevMember) => [member, ...prevMember]);
  }

  function deleteMember(id) {
    setTeamMembers((prevMember) =>
      prevMember.filter((member) => member.id !== id)
    );
  }
  useEffect(() => {
    localStorage.setItem("bugs", JSON.stringify(bugs));
  }, [bugs]);

  function addNewBug(enteredBugs) {
    setBugs((prevBugs) => [enteredBugs, ...prevBugs]);
  }

  function deleteBug(id) {
    setBugs((prevBugs) => prevBugs.filter((bug) => bug.id !== id));
  }

  return (
    <>
      <Sidebar />
      <Routes className="">
        <Route
          path="/"
          element={<Dashboard bugs={bugs} members={teamMembers} />}
        />
        <Route
          path="/bugTable"
          element={
            <BugTable
              members={teamMembers}
              bugs={bugs}
              onAddNewBug={addNewBug}
              onDeleteBug={deleteBug}
            />
          }
        />
        <Route
          path="/manageTeam"
          element={
            <ManageTeam
              members={teamMembers}
              onDeleteMember={deleteMember}
              onAddNewMember={newMember}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
