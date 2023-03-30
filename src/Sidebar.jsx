import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faList,
  faArrowRightFromBracket,
  faBugs,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  return (
    <section className="fixed top-0 left-0 px-5 border-8 border-solid border-white py-2 bg-blue-500 h-full rounded-2xl">
      <nav className="h-full">
        <ul className="flex flex-col gap-3 text-white h-full">
          <li className="flex items-center mb-2 mt-1 cursor-pointer">
            <FontAwesomeIcon
              className="bg-blue-400 rounded-lg border-1 border-solid border-white border p-1"
              icon={faBugs}
              size="lg"
            />
            <div className="flex flex-col ml-2">
              <a className="text-lg font-normal mr-2 -mb-1.5">Codekeeper</a>
              <p className="text-xs font-light">Ensuring code quality</p>
            </div>
          </li>
          <SidebarItem>
            <FontAwesomeIcon icon={faTableColumns} />
            <a className="text-sm ml-2">Dashboard</a>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faList} />
            <a className="cursor-pointer text-sm ml-2">Tickets</a>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faUser} />
            <a className="cursor-pointer text-sm ml-2">Profile</a>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faCode} />
            <a className="text-sm ml-2">Manage team</a>
          </SidebarItem>
          <SidebarItem>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <a className="cursor-pointer text-sm ml-2">Log out</a>
          </SidebarItem>
          <li className="flex items-center gap-2 mt-auto mb-2 bg-blue-400 rounded-lg border border-solid border-1 border-white py-2 px-1.5">
            <FontAwesomeIcon icon={faFaceSmile} size="xl" />
            <div className="flex flex-col">
              <p className="text-sm font-medium -mb-1">Welcome, Admin User</p>
              <p className="text-xs font-light">adminuser@gmail.com</p>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
}
