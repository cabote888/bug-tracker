import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ProjectsForm(props) {
  const todaysDate = new Date();
  const date = `${todaysDate.getDay()}/${todaysDate.getMonth()}/${todaysDate.getFullYear()}`;

  const colors = [
    { name: "Blue", colorValue: "blue-600" },
    { name: "Red", colorValue: "red-600" },
    { name: "Orange", colorValue: "orange-600" },
    { name: "Green", colorValue: "green-600" },
    { name: "Lime", colorValue: "lime-600" },
    { name: "Yellow", colorValue: "yellow-600" },
    { name: "Violet", colorValue: "violet-600" },
    { name: "Brown", colorValue: "orange-900" },
  ];

  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredColor, setEnteredColor] = useState();

  function handleNameChange(e) {
    setEnteredName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setEnteredDescription(e.target.value);
  }

  function handleColorChange(e) {
    setEnteredColor(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const enteredProject = {
      name: enteredName,
      description: enteredDescription,
      color: enteredColor,
      date: date,
    };
    setEnteredName("");
    setEnteredDescription("");
    setEnteredColor("");
    props.onAddNewProject(enteredProject);
  }
  return (
    <div>
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-wrap mt-16 gap-3"
      >
        <div className="flex items-center gap-1">
          <input
            onChange={handleNameChange}
            value={enteredName}
            required
            className="rounded-lg text-sm bg-gray-100  placeholder-slate-500 focus:ring-sky-200 focus:ring-2 border-none"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex items-center gap-1">
          <input
            onChange={handleDescriptionChange}
            value={enteredDescription}
            type="text"
            placeholder="Short description"
            required
            className="rounded-lg border-none text-slate-500 text-sm bg-gray-100 focus:ring-sky-200 focus:ring-2"
          ></input>
        </div>
        <div className="flex items-center gap-1">
          <select
            onChange={handleColorChange}
            value={enteredColor}
            required
            className="border-none bg-gray-100 text-slate-500 focus:ring-sky-200 focus:ring-2 text-sm rounded-lg"
          >
            <option value="" disabled hidden>
              Color
            </option>
            {colors.map((color) => (
              <option key={uuid()} value={color.colorValue}>{color.name}</option>
            ))}
          </select>
        </div>
        <button className="rounded-lg self-center bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2">
          Add Project
        </button>
      </form>
    </div>
  );
}
