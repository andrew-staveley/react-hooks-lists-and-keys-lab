import React from "react";

function ProjectItem({ name, about, technologies }) {
  let tech = technologies.map((x) => <span key={x}>{x}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
