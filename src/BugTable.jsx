// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function BugTracker(props) {
  // const bugsList = [
  //   {
  //     description: "Like button not working.",
  //     developer: "Magdalene",
  //     severity: "Critical ⚠️",
  //     key: Math.random(),
  //   },
  //   {
  //     description: "Fix bug in line 43.",
  //     developer: "Cain",
  //     severity: "Moderate",
  //     key: Math.random(),
  //   },
  // ];

  // const [newBug, setNewBug] = useState(bugsList);

  return (
    <div className='max-w-4xl mx-auto mt-20 bg-gray-50 shadow-lg rounded-lg p-3'>
      {props.bugs.map((bug) => (
        <div key={Math.random()} className="py-2 font-medium text-sm grid grid-cols-4 justify-items-center items-center border-b border-gray-200 border-solid">
          <p className='justify-self-start'>{bug.description}</p>
          <p>{bug.developer}</p>
          <p>{bug.severity}</p>
          <div className='justify-self-end'>
            <FontAwesomeIcon className='text-red-700 bg-red-300 text-lg p-2 rounded-lg' icon={faTrashCan} />
            <FontAwesomeIcon className='ml-2 text-lg bg-slate-300 p-2 rounded-lg' icon={faPenToSquare} />
          </div>
        </div>
      ))}
    </div>
  );
}
