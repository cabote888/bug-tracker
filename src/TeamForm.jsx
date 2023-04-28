import { useState } from "react";

export default function TeamForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredRole, setEnteredRole] = useState("");

  function handleNameChange(e) {
    setEnteredName(e.target.value);
  }

  function handleAgeChange(e) {
    setEnteredAge(e.target.value);
  }

  function handleRoleChange(e) {
    setEnteredRole(e.target.value);
  }

  function submitMember(e) {
    e.preventDefault();
    const enteredMember = {
      name: enteredName,
      age: enteredAge,
      role: enteredRole,
    };
    setEnteredName("");
    setEnteredAge("");
    setEnteredRole("");
    props.onNewMember(enteredMember);
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
        value={enteredAge}
        onChange={handleAgeChange}
        type="text"
        placeholder="Age"
        className="rounded-lg text-sm bg-gray-100 text-slate-500 placeholder-slate-500 focus:ring-sky-200 focus:ring-2 border-none"
      />
      <input
        required
        value={enteredRole}
        onChange={handleRoleChange}
        type="text"
        className="border-none bg-gray-100 text-slate-500 focus:ring-sky-200 focus:ring-2 text-sm rounded-lg"
        placeholder="Role"
      />
      <button className="rounded-lg  self-center bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2">
        Add Member
      </button>
    </form>
  );
}
