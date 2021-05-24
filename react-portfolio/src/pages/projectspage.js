import React, { Component, ReactPhotoGrid, useState } from "react";
import ProjectCard from "../components/projectcard";
import ProjectsDB from "./../projectsdb.json";
import "./projectspage.css";

class ProjectsPage extends Component {
  render() {
    const projects = ProjectsDB.map((d, index) => (
      <ProjectCard
        key={d.id}
        name={d.name}
        thumbnail={d.thumbnail}
        description={d.description}
        videos={d.youtube_ids}
        images={d.images}
        links={d.links}
        tags={d.tags}
        index={index}
      ></ProjectCard>
    ));

    return (
      <div id="projects">
        <div className="d-flex align-items-center justify-content-center px-0 mx-0">
          <h1 className="text-center mt-5 mb-5 px-0 section-title">
            -Projects-
          </h1>
        </div>
        <div className="  d-flex justify-content-center">
          <div className="CardGroup row container d-flex justify-content-center ">
            {projects}

           {/*  <img
                id="profile-image"
                className="align-middle align-items-center pt-4 pb-4"
                //src={imageName}
                //src={require(""+ projects[0].images[0].src), true} 
                  />
 */}

          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
