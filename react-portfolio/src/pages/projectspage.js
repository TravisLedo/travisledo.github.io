import React, { Component } from "react";
import ProjectsCard from "../components/projectscard";
import ProjectsDB from "./../projectsdb.json";
import "./projectspage.css";

class ProjectsPage extends Component {
  render() {
    const projects = ProjectsDB.map((d, index) => (
      <ProjectsCard
        key={d.id}
        id={d.id}
        name={d.name}
        thumbnail={d.thumbnail}
        description={d.description}
        videos={d.youtube_ids}
        images={d.images}
        links={d.links}
        tags={d.tags}
        index={index}
      ></ProjectsCard>
    ));

    return (
      <div id="projects">

        <div className="d-flex align-items-center justify-content-center">
          <h1 className="text-center section-title">
            -Projects-
          </h1>
        </div>
        <div className="  d-flex justify-content-center">
          <div className="row container">
            {projects}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
