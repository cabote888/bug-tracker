import { useState } from "react";
import { v4 as uuid } from "uuid";
import Modal from "../Modal/Modal.jsx";
import FormItem from "../Form/FormItem.jsx";
import InputItem from "../Form/InputItem.jsx";

export default function TeamForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPosition, setEnteredPosition] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const todaysDate = new Date();
  const date = `${todaysDate.getDate()}/${
    todaysDate.getMonth() + 1
  }/${todaysDate.getFullYear()}`;

  function handleNameChange(e) {
    setEnteredName(e.target.value);
  }

  function handleMailChange(e) {
    setEnteredMail(e.target.value);
  }

  function handlePositionChange(e) {
    setEnteredPosition(e.target.value);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal(e) {
    e.preventDefault();
    setOpenModal(false);
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
    setOpenModal(false);
    props.onAddNewMember(enteredMember);
  }
  return (
    <div className="relative">
      <div className="flex gap-x-5 mt-5">
        <div
          onClick={handleOpenModal}
          className="md:w-44 bg-blue-500 hover:bg-blue-600 transition cursor-pointer rounded-lg text-white text-xl font-light flex items-center justify-center"
        >
          <p className="px-5">+ Add Member</p>
        </div>
        <div className="flex flex-col md:w-36 justify-between bg-white rounded-lg py-2 px-4">
          <p>Total members</p>
          <p className="text-6xl text-slate-800">{props.members.length}</p>
        </div>
      </div>
      <Modal open={openModal} close={handleCloseModal}>
        <FormItem onSubmit={submitMember}>
          <InputItem
            value={enteredName}
            placeholder={"Name"}
            onChange={handleNameChange}
          />
          <InputItem
            value={enteredMail}
            onChange={handleMailChange}
            placeholder={"E-Mail"}
          />
          <InputItem
            value={enteredPosition}
            onChange={handlePositionChange}
            placeholder={"Position"}
          />
          <div className="grid grid-cols-2 gap-x-5">
            <button
              type="submit"
              className="md:block rounded-lg self-center bg-blue-600 focus:ring-4 focus:ring-sky-200 focus:outline-none hover:bg-blue-500 transition text-white text-sm font-medium p-2"
            >
              Add Member
            </button>
            <button
              type="button"
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
