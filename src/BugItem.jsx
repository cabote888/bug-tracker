import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BugItem(props) {
  return (
    <div className="py-2 text-sm grid grid-cols-4 justify-items-center items-center border-b border-gray-200">
      <p className="justify-self-start">{props.description}</p>
      <p>{props.developer}</p>
      <p>{props.severity}</p>
      <div className="justify-self-end">
        <FontAwesomeIcon
          className="text-lg bg-blue-400 cursor-pointer hover:bg-blue-500 transition text-white p-2 rounded-xl"
          icon={faCheck}
        />
        <button onClick={props.onDeleteBug}>
          <FontAwesomeIcon
            className="text-white ml-3 bg-red-600 text-lg p-2 hover:bg-red-500 transition rounded-xl"
            icon={faTrashCan}
          />
        </button>
      </div>
    </div>
  );
}
