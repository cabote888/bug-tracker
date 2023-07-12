import { useState } from "react";
import { v4 as uuid } from "uuid";
import SelectMulti from "../SelectComponent/SelectMulti";
import SelectSimple from "../SelectComponent/SelectSimple";
import Modal from "../Modal/Modal.jsx";
import FormItem from "../Form/FormItem.jsx";
import InputItem from "../Form/InputItem";

export default function ProjectsForm(props) {
  const todaysDate = new Date();
  const date = `${todaysDate.getDate()}/${
    todaysDate.getMonth() + 1
  }/${todaysDate.getFullYear()}`;

  const colors = [
    { label: "Blue", value: "blue-600", id: uuid() },
    { label: "Red", value: "red-600", id: uuid() },
    { label: "Orange", value: "orange-600", id: uuid() },
    { label: "Green", value: "green-600", id: uuid() },
    { label: "Lime", value: "lime-600", id: uuid() },
    { label: "Yellow", value: "yellow-600", id: uuid() },
    { label: "Violet", value: "violet-600", id: uuid() },
    { label: "Brown", value: "orange-900", id: uuid() },
  ];

  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredColor, setEnteredColor] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [resetCounter, setResetCounter] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function handleSelectMembersChange(members) {
    setSelectedMembers(members);
  }

  function handleSelectChange(option) {
    setEnteredColor(option);
  }

  function handleNameChange(e) {
    setEnteredName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setEnteredDescription(e.target.value);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal(e) {
    e.preventDefault();
    setOpenModal(false);
  }

  function submitHandler(e) {
    e.preventDefault();
    const enteredProject = {
      name: enteredName,
      description: enteredDescription,
      color: enteredColor,
      date: date,
      members: selectedMembers,
      id: uuid(),
    };
    setEnteredName("");
    setEnteredDescription("");
    setEnteredColor("");
    setOpenModal(false);
    props.onAddNewProject(enteredProject);
    setResetCounter((prevResetCounter) => prevResetCounter + 1);
  }
  return (
    <div>
      <div className="flex gap-x-5 mt-5">
        <div
          onClick={handleOpenModal}
          className="md:w-44 bg-blue-500 hover:bg-blue-600 transition cursor-pointer rounded-lg text-white text-xl font-light flex items-center justify-center"
        >
          <p className="px-5">+ Add Project</p>
        </div>
        <div className="flex flex-col md:w-36 justify-between bg-white rounded-lg py-2 px-4">
          <p>Total projects</p>
          <p className="text-6xl text-slate-800">{props.projects.length}</p>
        </div>
      </div>
      <Modal open={openModal} close={handleCloseModal}>
        <FormItem onSubmit={submitHandler}>
          <InputItem
            onChange={handleNameChange}
            value={enteredName}
            type="text"
            placeholder={"Name"}
          />
          <InputItem
            onChange={handleDescriptionChange}
            value={enteredDescription}
            placeholder={"Short description"}
          />
          <SelectMulti
            members={props.members}
            onSelectedMembers={handleSelectMembersChange}
            counter={resetCounter}
          />
          <SelectSimple
            options={colors}
            onSelectedOption={handleSelectChange}
            placeholder={"Select color"}
            counter={resetCounter}
          />
          <div className="grid grid-cols-2 gap-x-5">
            <button className="rounded-lg w-full bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2">
              Add Project
            </button>
            <button
              onClick={handleCloseModal}
              className="md:block rounded-lg self-center bg-red-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-red-500 transition text-white text-sm font-medium p-2"
            >
              Cancel
            </button>
          </div>
        </FormItem>
      </Modal>
    </div>
  );
}
