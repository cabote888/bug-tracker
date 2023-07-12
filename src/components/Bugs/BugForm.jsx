import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import SelectSimple from "../SelectComponent/SelectSimple";
import FormItem from "../Form/FormItem.jsx";
import InputItem from "../Form/InputItem.jsx";

export default function BugForm(props) {
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredDev, setEnteredDev] = useState([]);
  const [enteredSeverity, setEnteredSeverity] = useState([]);
  const [enteredProject, setEnteredProject] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [resetCounter, setResetcounter] = useState(0);
  const filteredMembers = props.members.map((member) => ({
    label: member.name,
    value: member.name,
  }));

  function handleDescChange(e) {
    setEnteredDesc(e.target.value);
  }

  function handleDevChange(option) {
    setEnteredDev(option);
  }

  function handleSeverityChange(option) {
    setEnteredSeverity(option);
  }

  function handleProjectChange(option) {
    setEnteredProject(option);
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
    const enteredBugs = {
      description: enteredDesc,
      developer: enteredDev.value,
      severity: enteredSeverity.value,
      project: enteredProject.value,
      id: Math.random(),
      key: Math.random(),
    };
    setEnteredDesc("");
    setEnteredDev("");
    setEnteredSeverity("");
    setEnteredProject("");
    props.onAddNewBug(enteredBugs);
    setOpenModal(false);
    setResetcounter((prevResetCounter) => prevResetCounter + 1);
  }

  const filteredProjects = props.projects.map((project) => ({
    label: project.name,
    value: project.name,
  }));

  return (
    <div>
      <div className="flex gap-x-5 mt-5">
        <div
          onClick={handleOpenModal}
          className="md:w-44 bg-blue-500 hover:bg-blue-600 transition cursor-pointer rounded-lg text-white text-xl font-light flex items-center justify-center"
        >
          <p className="px-5">+ Add bug</p>
        </div>
        <div className="flex flex-col md:w-36 justify-between bg-white rounded-lg py-2 px-4">
          <p>Total bugs</p>
          <p className="text-6xl text-slate-800">{props.bugs.length}</p>
        </div>
      </div>
      <Modal open={openModal} close={handleCloseModal}>
        <FormItem onSubmit={submitHandler}>
          <InputItem
            onChange={handleDescChange}
            value={enteredDesc}
            placeholder={"Short description"}
          />
          <SelectSimple
            counter={resetCounter}
            options={filteredMembers}
            onSelectedOption={handleDevChange}
            placeholder={"Select member"}
          />
          <SelectSimple
            options={[
              { label: "Minimal", value: "Minimal" },
              { label: "Moderate", value: "Moderate" },
              { label: "Critical", value: "Critical" },
            ]}
            counter={resetCounter}
            onSelectedOption={handleSeverityChange}
            placeholder={"Enter severity"}
          />
          <SelectSimple
            options={filteredProjects}
            onSelectedOption={handleProjectChange}
            placeholder={"Select project"}
            counter={resetCounter}
          />
          <div className="grid grid-cols-2 gap-x-5">
            <button className="rounded-lg self-center bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2">
              Add Bug
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
