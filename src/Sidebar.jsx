import SidebarItem from "./SidebarItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faTableColumns,
  faList,
  faArrowRightFromBracket,
  faBugs,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <section className="fixed top-0 left-0 w-24 transition-all duration-200 md:w-56 px-5 border-8 border-solid border-white py-2 bg-blue-500 h-full rounded-2xl">
      <nav className="h-full">
        <ul className="flex flex-col gap-10 md:gap-3 text-white h-full">
          <li className="flex items-center mb-2 mt-1 cursor-pointer">
            <FontAwesomeIcon
              className="bg-blue-400 rounded-lg border-1 border-solid border-white border p-1"
              icon={faBugs}
              size="lg"
            />
            <div className="md:block hidden ml-2">
              <a className="text-lg font-normal mr-2 -mb-1.5">Codekeeper</a>
              <p className="text-xs font-light">Ensuring code quality</p>
            </div>
          </li>
          <SidebarItem to={"/"}>
            <FontAwesomeIcon className="pl-1" icon={faTableColumns} />
            <p className="text-sm md:block ml-2 hidden">Dashboard</p>
          </SidebarItem>
          <SidebarItem to={"/bugTable"}>
            <FontAwesomeIcon className="pl-1" icon={faList} />
            <p className="cursor-pointer md:block ml-2 hidden text-sm">Tickets</p>
          </SidebarItem>
          <SidebarItem to={"/profile"}>
            <FontAwesomeIcon className="pl-1" icon={faUser} />
            <p className="cursor-pointer md:block ml-2 hidden text-sm">Profile</p>
          </SidebarItem>
          <SidebarItem to={"/manageTeam"}>
            <FontAwesomeIcon className="" icon={faCode} />
            <p className="cursor-pointer text-sm md:block ml-2 hidden">Team</p>
          </SidebarItem>
          <SidebarItem to={"/404error"}>
            <FontAwesomeIcon className="pl-1" icon={faArrowRightFromBracket} />
            <p className="cursor-pointer md:block ml-2 hidden text-sm">Log out</p>
          </SidebarItem>
          <li className="flex items-center gap-2 mt-auto mb-2 bg-blue-400 rounded-lg border border-solid border-1 border-white py-2 px-1.5">
            <FontAwesomeIcon icon={faFaceSmile} size="xl" />
            <div className="md:block hidden">
              <p className="text-sm font-medium -mb-1">Welcome, Admin</p>
              <p className="text-xs font-light">adminuser@gmail.com</p>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  );
}
