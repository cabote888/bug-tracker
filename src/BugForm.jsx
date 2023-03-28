import { useState } from "react";

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
    <form
      action=""
      onSubmit={submitHandler}
      className="flex justify-between items-center"
    >
      <div className="flex-col flex gap-5">
        <label htmlFor="">Description</label>
        <input
          className="rounded-lg"
          onChange={handleDescChange}
          value={enteredDesc}
          type="text"
          placeholder="Short description"
        />
      </div>
      <div className="flex-col flex gap-5">
        <label htmlFor="">Developer</label>
        <select
          className="rounded-lg"
          onChange={handleDevChange}
          value={enteredDev}
        >
          <option value="" disabled>Choose dev...</option>
          <option value="Magdalene">Magdalene</option>
          <option value="Cain">Cain</option>
          <option value="Isaac">Isaac</option>
          <option value="Lilith">Lilith</option>
          <option value="Jacob">Jacob</option>
        </select>
      </div>
      <div className="flex-col flex gap-5">
        <label htmlFor="">Severity</label>
        <select
          className="rounded-lg"
          onChange={handleSeverityChange}
          value={enteredSeverity}
        >
          <option value="" disabled>Choose severity...</option>
          <option value="Minimal">Minimal</option>
          <option value="Moderate">Moderate</option>
          <option value="Critical ⚠️">Critical ⚠️</option>
        </select>
      </div>
      <button className="self-end rounded-lg bg-blue-400  px-2 text-white font-medium p-1">
        Add Bug
      </button>
    </form>
  );
}
