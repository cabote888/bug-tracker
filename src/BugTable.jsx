import BugForm from "./BugForm";
import { useState, useEffect } from "react";
import Header from "./Header";
import WrapperHeader from "./WrapperHeader";
import BugItem from "./BugItem";

export default function BugTable(props) {


  const [bugs, setBugs] = useState(() => {
    const localData = localStorage.getItem("bugs");
    return localData ? JSON.parse(localData) : props.bugsArray;
  });

  useEffect(() => {
    localStorage.setItem("bugs", JSON.stringify(bugs));
  }, [bugs]);

  function newBugHandler(bug) {
    setBugs((prevBug) => {
      return [bug, ...prevBug];
    });
  }
  function handleDelete(bugId) {
    setBugs((prevBugs) => {
      return prevBugs.filter((bug) => bug.id !== bugId);
    });
  }

  return (
    <div>
      <WrapperHeader>
        <h1 className="text-2xl font-brandon-bold text-dark-blue">
          Bug manager
        </h1>
        <Header>
          The "Add New Bug" tool in Codekeeper Bug Tracker simplifies issue
          reporting by allowing users to easily add a new bug to their list with
          crucial characteristics such as severity, description, and assignee.
          This improves bug tracking and allows teams to resolve issues more
          quickly, resulting in high-quality software.
        </Header>
      </WrapperHeader>
      <BugForm onAddNewBug={newBugHandler} teamMembers={props.membersArray} />
      <div className="mt-10 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-4 bg-blue-100 text-gray-400 rounded-t-lg p-3 text-xs">
          <p>ISSUE</p>
          <p className="place-self-center">ASSIGNEE</p>
          <p className="place-self-center">SEVERITY</p>
        </div>
        {bugs.map((bug) => (
          <BugItem
            description={bug.description}
            developer={bug.developer}
            severity={bug.severity}
            key={Math.random()}
            onDeleteBug={() => handleDelete(bug.id)}
          />
        ))}
      </div>
    </div>
  );
}
