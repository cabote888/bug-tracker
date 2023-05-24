import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFolderOpen,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTableColumns,
  faList,
  faArrowRightFromBracket,
  faBugs,
  faCode,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  function toggleBar() {
    setShowSidebar(!showSidebar);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(
          ".text-white.fixed.font-bold.z-50.w-10.h-10.active\\:bg-blue-400.transition-all.bg-blue-500.right-5.sm\\:hidden.rounded-full"
        )
      ) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textClass = showSidebar ? "ml-2 text-sm" : "ml-2 text-sm";
  return (
    <div className="relative">
      <button
        className="text-white fixed font-bold z-50 w-10 h-10 active:bg-blue-400 transition-all bg-blue-500 right-5 sm:hidden rounded-full"
        onClick={toggleBar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <section
        ref={sidebarRef}
        className={`${
          showSidebar ? "w-56" : "transform w-56 -translate-x-full"
        } fixed top-0 left-0 transition-all duration-500 z-50 md:transform md:translate-x-0 md:w-56 border-8 border-offWhite bg-blue-500 h-full rounded-2xl`}
      >
        <nav onClick={() => setShowSidebar(false)} className="h-full">
          <ul className="flex flex-col gap-5 px-5 p-3 text-white h-full">
            <li className="flex items-center mb-2 mt-1 cursor-pointer">
              <FontAwesomeIcon
                className="bg-blue-400 rounded-lg border-1 border-solid border-white border p-1"
                icon={faBugs}
                size="lg"
              />
              <div className="">
                <a className="text-lg font-normal ml-2">Codekeeper</a>
              </div>
            </li>
            <SidebarItem className to={"/"}>
              <FontAwesomeIcon className="self-center" icon={faTableColumns} />
              <p className={textClass}>Dashboard</p>
            </SidebarItem>
            <SidebarItem to={"/projects"}>
              <FontAwesomeIcon className="self-center" icon={faFolderOpen} />
              <p className={textClass}> Projects</p>
            </SidebarItem>
            <SidebarItem to={"/bugTable"}>
              <FontAwesomeIcon className="self-center" icon={faList} />
              <p className={textClass}>Tickets</p>
            </SidebarItem>
            <SidebarItem to={"/profile"}>
              <FontAwesomeIcon className="self-center" icon={faUser} />
              <p className={textClass}>Profile</p>
            </SidebarItem>
            <SidebarItem to={"/manageTeam"}>
              <FontAwesomeIcon icon={faCode} />
              <p className={textClass}>Team</p>
            </SidebarItem>
            <SidebarItem to={"/404error"}>
              <FontAwesomeIcon
                className="self-center"
                icon={faArrowRightFromBracket}
              />
              <p className={textClass}>Log out</p>
            </SidebarItem>
            <li className="flex items-center gap-2 mt-auto mb-2 bg-blue-400 rounded-lg border border-solid border-1 border-white py-2 px-1.5">
              <FontAwesomeIcon icon={faFaceSmile} size="xl" />
              <div className="-ml-1">
                <p className="text-sm font-medium -mb-1">Welcome, Admin</p>
                <p className="text-xs font-light">adminuser@gmail.com</p>
              </div>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
