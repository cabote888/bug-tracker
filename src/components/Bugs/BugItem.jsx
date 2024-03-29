import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BugItem(props) {
  return (
    <div className="py-2 text-sm text-slate-700 grid grid-cols-5 px-3 justify-items-center items-center border-b border-gray-200">
      <p className="justify-self-start">{props.description}</p>
      <p>{props.developer}</p>
      <p>{props.severity}</p>
      <p>{props.project}</p>
      <div className="justify-self-end">
        <FontAwesomeIcon
          className="text-md bg-blue-400 cursor-pointer hover:bg-blue-500 transition text-white p-2 rounded-xl"
          icon={faCheck}
        />
        <button onClick={() => props.onDeleteBug(props.id)}>
          <FontAwesomeIcon
            className="text-white ml-3 bg-red-600 text-md p-2 hover:bg-red-500 transition rounded-xl"
            icon={faTrashCan}
          />
        </button>
      </div>
    </div>
  );
}
