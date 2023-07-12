import profilePic from "../../assets/beastboy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faI, faInfo } from "@fortawesome/free-solid-svg-icons";

export default function TeamMember(props) {
  return (
    <div className="flex flex-col w-full bg-white items-center gap-y-10 xs:w-44 md:grid md:grid-cols-5 md:w-full py-3 md:py-1 md:border md:rounded-none px-3 rounded-xl">
      <div className="flex items-center justify-items-center self-start w-full md:hidden md:text-right md:self-center">
        <FontAwesomeIcon
          className="cursor-pointer text-blue-500 md:p-2 md:rounded-xl"
          icon={faPenToSquare}
        />
        <button onClick={() => props.onDeleteMember(props.id)}>
          <FontAwesomeIcon
            className="text-red-600 cursor-pointer ml-2"
            icon={faTrashCan}
          />
        </button>
        <FontAwesomeIcon icon={faInfo} className="text-slate-600 ml-auto cursor-pointer" />
      </div>
      <div className="rounded-full p-2 ring-2 ring-blue-500 md:ring-0 md:rounded-none md:flex md:gap-x-5 md:col-span-2">
        <img
          className="w-16 h-16 md:w-12 md:h-12 rounded-full"
          src={profilePic}
          alt="profile"
        />
        <div className="md:self-center">
          <p className="hidden md:self-center md:block">{props.name}</p>
          <p className="hidden md:block self-start text-gray-500 text-sm">
            {props.mail}
          </p>
        </div>
      </div>
      <div className="self-start items-center md:inline-block md:text-center md:self-center gap-5">
        <div className="self-start">
          <p className="md:self-center md:hidden">{props.name}</p>
          <p className="text-sm text-gray-500">
            {props.position.toUpperCase()}
          </p>
        </div>
      </div>

      <p className="hidden md:block md:self-center md:text-center text-sm">
        {props.date}
      </p>
      <div className="hidden md:block md:text-right md:self-center">
        <FontAwesomeIcon
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 transition text-white p-2 rounded-xl"
          icon={faPenToSquare}
        />
        <button onClick={() => props.onDeleteMember(props.id)}>
          <FontAwesomeIcon
            className="text-white ml-3 cursor-pointer bg-red-600 p-2 hover:bg-red-500 transition rounded-xl"
            icon={faTrashCan}
          />
        </button>
      </div>
    </div>
  );
}
