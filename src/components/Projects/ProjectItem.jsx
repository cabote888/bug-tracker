import { faUser, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export default function ProjectItem(props) {
  const borderColorClass = classNames({
    "border-blue-600": props.color === "blue-600",
    "border-red-600": props.color === "red-600",
    "border-orange-600": props.color === "orange-600",
    "border-green-600": props.color === "green-600",
    "border-lime-600": props.color === "lime-600",
    "border-yellow-600": props.color === "yellow-600",
    "border-violet-600": props.color === "violet-600",
    "border-orange-900": props.color === "orange-900",
  });

  const bgTitleClass = classNames({
    "bg-blue-600": props.color === "blue-600",
    "bg-red-600": props.color === "red-600",
    "bg-orange-600": props.color === "orange-600",
    "bg-green-600": props.color === "green-600",
    "bg-lime-600": props.color === "lime-600",
    "bg-yellow-600": props.color === "yellow-600",
    "bg-violet-600": props.color === "violet-600",
    "bg-orange-900": props.color === "orange-900",
  });

  return (
    <div>
      <div
        className={`${borderColorClass} border-2 max-w-readable rounded-lg shadow-lg p-4`}
      >
        <h1
          className={`${bgTitleClass} rounded-lg inline text-white p-1 text-sm `}
        >
          {props.name.toUpperCase()}
        </h1>
        <p className="mt-4 text-justify text-sm text-gray-500">
          {props.description}
        </p>
        <div className="mt-4 flex gap-2">
          <p className="text-xs bg-gray-200 p-1 rounded-lg">{props.date}</p>
          <p className="text-xs bg-gray-200 p-1 rounded-lg">
            <FontAwesomeIcon icon={faUser} className="mr-1" />
            {props.team.length}
          </p>
          <button
            className="text-white rounded-md px-1 ml-auto bg-red-600 hover:bg-red-500 cursor-pointer transition"
            onClick={() => props.onDeleteProject(props.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
}
