import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TeamForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPosition, setEnteredPosition] = useState("");

  const todaysDate = new Date();
  const date = `${todaysDate.getDay()}/${todaysDate.getMonth()}/${todaysDate.getFullYear()}`;

  function handleNameChange(e) {
    setEnteredName(e.target.value);
  }

  function handleMailChange(e) {
    setEnteredMail(e.target.value);
  }

  function handlePositionChange(e) {
    setEnteredPosition(e.target.value);
  }

  function submitMember(e) {
    e.preventDefault();
    const enteredMember = {
      name: enteredName,
      mail: enteredMail,
      position: enteredPosition,
      date: date,
      id: uuid(),
    };
    setEnteredName("");
    setEnteredMail("");
    setEnteredPosition("");
    props.onAddNewMember(enteredMember);
  }

  return (
    <form className="flex flex-wrap gap-3 mt-16" onSubmit={submitMember}>
      <input
        required
        type="text"
        value={enteredName}
        placeholder="Name"
        onChange={handleNameChange}
        className="rounded-lg text-sm bg-gray-100 text-slate-500 placeholder-slate-500 focus:ring-sky-200 focus:ring-2 border-none"
      />
      <input
        required
        value={enteredMail}
        onChange={handleMailChange}
        type="text"
        placeholder="E-Mail"
        className="rounded-lg text-sm bg-gray-100 text-slate-500 placeholder-slate-500 focus:ring-sky-200 focus:ring-2 border-none"
      />
      <input
        required
        value={enteredPosition}
        onChange={handlePositionChange}
        type="text"
        className="border-none bg-gray-100 text-slate-500 focus:ring-sky-200 focus:ring-2 text-sm rounded-lg"
        placeholder="Position"
      />
      <button className="rounded-lg  self-center bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2">
        Add Member
      </button>
    </form>
  );
}
