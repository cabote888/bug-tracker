import profilePic from "../../assets/beastboy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function TeamMember(props) {
  return (
    <div className="grid grid-cols-4 py-4 border-b border-gray-200 px-3 rounded-lg">
      <div className="flex gap-5">
        <img
          className="w-12 h-12 rounded-full ring-2 ring-emerald-200"
          src={profilePic}
          alt="profile"
        />
        <div>
          <p className="font-brandon self-center font-bold">{props.name}</p>
          <p className="text-sm text-gray-500">{props.mail}</p>
        </div>
      </div>
      <p className="text-gray-500 self-center text-sm text-center">
        {props.position}
      </p>
      <p className="self-center text-center text-sm">{props.date}</p>
      <div className="text-right self-center">
        <FontAwesomeIcon
          className=" bg-blue-400 cursor-pointer hover:bg-blue-500 transition text-white p-2 rounded-xl"
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
