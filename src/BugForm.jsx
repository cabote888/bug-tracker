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
            key: Math.random(),
        };
        setEnteredDesc("");
        setEnteredDev("");
        setEnteredSeverity("");
        props.onAddNewBug(enteredBugs);
    }

  return (
    <form action="" onSubmit={submitHandler} className="flex justify-between items-center max-w-4xl mx-auto mt-10">
      <div>
        <label htmlFor="">Description</label>
        <input className="rounded-lg p-0 ml-2" onChange={handleDescChange} type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Developer</label>
        <select className="rounded-lg p-0 pr-10 pl-2 ml-2" onChange={handleDevChange} name="" id="">
            <option value="Magdalene">Magdalene</option>
            <option value="Cain">Cain</option>
            <option value="Isaac">Isaac</option>
            <option value="Lilith">Lilith</option>
            <option value="Jacob">Jacob</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Severity</label>
        <select className="rounded-lg p-0 pr-10 pl-2 ml-2" onChange={handleSeverityChange} name="" id="">
            <option value="Minimal">Minimal</option>
            <option value="Moderate">Moderate</option>
            <option value="Critical ⚠️">Critical ⚠️</option>
        </select>
      </div>
      <button className="rounded-lg bg-blue-400  px-2 text-white font-medium p-1" >Add Bug</button>
    </form>
  );
}
