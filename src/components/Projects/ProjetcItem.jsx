import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectItem(props) {
    const borderColorClass = props.color ? `border-${props.color}` : "";

  return (
    <div>
      <div
        className={`border-2 cursor-pointer ${borderColorClass} max-w-readable rounded-lg shadow-lg p-4 hover:scale-95 transition-all`}
      >
        <h1
          className={`bg-${props.color} rounded-lg inline text-white p-1 text-sm`}
        >
          {props.name}
        </h1>
        <p className="mt-4 text-justify text-sm text-gray-500">
          {props.description}
        </p>
        <div className="mt-4 flex gap-2">
          <p className="text-xs bg-gray-200 p-1 rounded-lg">{props.date}</p>
          <p className="text-xs bg-gray-200 p-1 rounded-lg"><FontAwesomeIcon icon={faUser} className="mr-1" />{999}</p>
        </div>
      </div>
    </div>
  );
}
