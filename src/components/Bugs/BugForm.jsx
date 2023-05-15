import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function BugForm(props) {
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredDev, setEnteredDev] = useState("");
  const [enteredSeverity, setEnteredSeverity] = useState("");

  function handleDescChange(e) {
    setEnteredDesc(e.target.value);
  }

  function handleDevChange(e) {
    setEnteredDev(e.target.value);
  }

  function handleSeverityChange(e) {
    setEnteredSeverity(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const enteredBugs = {
      description: enteredDesc,
      developer: enteredDev,
      severity: enteredSeverity,
      id: Math.random(),
      key: Math.random(),
    };
    setEnteredDesc("");
    setEnteredDev("");
    setEnteredSeverity("");
    props.onAddNewBug(enteredBugs);
  }
  return (
    <div>
      <form action="" onSubmit={submitHandler} className="flex flex-wrap mt-16 gap-3">
        <div className="flex items-center gap-1">
          <input
            required
            className="rounded-lg text-sm bg-gray-100 placeholder-slate-500 focus:ring-sky-200 focus:ring-2 border-none"
            onChange={handleDescChange}
            value={enteredDesc}
            type="text"
            placeholder="Short description"
          />
        </div>
        <div className="flex items-center gap-1">
          <select
            required
            className="rounded-lg border-none text-slate-500 text-sm bg-gray-100 focus:ring-sky-200 focus:ring-2"
            onChange={handleDevChange}
            value={enteredDev}
          >
            <option value="" disabled hidden>
              Choose developer
            </option>
            {props.members.map((member) => <option key={member.id}>{member.name}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-1">
          <select
            required
            className="border-none bg-gray-100 text-slate-500 focus:ring-sky-200 focus:ring-2 text-sm rounded-lg"
            onChange={handleSeverityChange}
            value={enteredSeverity}
          >
            <option value="" disabled hidden>
              Choose severity
            </option>
            <option value="Minimal">Minimal</option>
            <option value="Moderate">Moderate</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        <button className="rounded-lg self-center bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2">
          Add Bug
        </button>
      </form>
    </div>
  );
}
