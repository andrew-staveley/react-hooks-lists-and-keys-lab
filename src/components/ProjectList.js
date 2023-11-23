import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let project = projects.map((element) => {
    return <ProjectItem name={element.name} about={element.about} technologies={element.technologies} key={element.id} />
  });
  return project;
};

export default ProjectList;
