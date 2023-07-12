import ProjectsForm from "./ProjectsForm";
import ProjectItem from "./ProjectItem";
import WrapperHeader from "../Header/WrapperHeader";
import Header from "../Header/Header";

export default function Projects(props) {
  function handleAddProject(enteredProject) {
    props.onNewProject(enteredProject);
    props.onAddProjectLabel(enteredProject.name)
  }

  function handleDeleteProject(id) {
    props.onDeleteProject(id)
    const deletedProject = props.projects.find((project) => project.id === id);
    if (deletedProject) {
      props.onDeleteProjectLabel(deletedProject.name);
    }
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
      <ProjectsForm onAddNewProject={handleAddProject} projects={props.projects} members={props.members} />
      <div className="grid grid-cols-3 gap-5 mt-10">
        {props.projects.map((project) => (
          <ProjectItem
            onDeleteProject={props.onDeleteProject}
            name={project.name}
            description={project.description}
            color={project.color.value}
            date={project.date}
            team={project.members}
            id={project.id}
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
}
