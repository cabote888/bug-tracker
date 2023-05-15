import BugForm from "./BugForm";
import Header from "../Header/Header";
import WrapperHeader from "../Header/WrapperHeader";
import BugItem from "./BugItem";

export default function BugTable(props) {
  function handleAddNewBug(enteredBugs) {
    props.onAddNewBug(enteredBugs);
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
      <BugForm onAddNewBug={handleAddNewBug} bugs={props.bugs} members={props.members} />
      <div className="mt-10 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-4 bg-blue-100 text-gray-400 rounded-t-lg p-3 text-xs">
          <p>ISSUE</p>
          <p className="place-self-center">ASSIGNEE</p>
          <p className="place-self-center">SEVERITY</p>
        </div>
        {props.bugs.map((bug) => (
          <BugItem
            description={bug.description}
            developer={bug.developer}
            severity={bug.severity}
            key={bug.id}
            id={bug.id}
            onDeleteBug={props.onDeleteBug}
          />
        ))}
      </div>
    </div>
  );
}
