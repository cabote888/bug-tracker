import ProjectsForm from "./ProjectsForm";
import ProjectItem from "./ProjetcItem";
import WrapperHeader from "../Header/WrapperHeader";
import Header from "../Header/Header";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  function newProject(project) {
    setProjects((prevProject) => [project, ...prevProject]);
  }

  return (
    <div>
      <WrapperHeader>
        <h1 className="text-2xl font-brandon-bold text-dark-blue">Projects</h1>
        <Header>
          Welcome to the Projects page of our Bug Tracker application! This page
          is your central hub for managing and organizing your software
          development projects efficiently. Here, you can create, track, and
          collaborate on projects seamlessly, empowering your team to deliver
          high-quality software with ease.
        </Header>
      </WrapperHeader>
      <ProjectsForm onAddNewProject={newProject} />
      <div className="grid grid-cols-3 gap-5 mt-10">
      {projects.map((project) => (
        <ProjectItem
          name={project.name}
          description={project.description}
          color={project.color}
          date={project.date}
          key={uuid()}
        />
      ))}
      </div>
    </div>
  );
}
