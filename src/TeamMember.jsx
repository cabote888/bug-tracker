import profilePic from "./beastboy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function TeamMember(props) {
  return (
    <div className="flex flex-col items-center shadow-lg rounded-lg ring-1 ring-teal-200 pb-5 w-48 gap-3">
      <div className="w-full bg-cyan-500 rounded-t-lg py-5">
        <img
          className="w-20 h-20 rounded-full ring-2 ring-emerald-200 mx-auto"
          src={profilePic}
          alt="profile"
        />
      </div>
      <p className="font-brandon font-bold">
        {props.name}, {props.age}
      </p>
      <p className="text-gray-500">{props.role}</p>
      <div className="mt-3">
        <FontAwesomeIcon
          className=" bg-blue-400 cursor-pointer hover:bg-blue-500 transition text-white p-2 rounded-full"
          icon={faPenToSquare}
        />
        <button onClick={props.onDeleteMember}>
          <FontAwesomeIcon
            className="text-white ml-3 cursor-pointer bg-red-600  p-2 hover:bg-red-500 transition rounded-full"
            icon={faTrashCan}
          />
        </button>
      </div>
    </div>
  );
}
