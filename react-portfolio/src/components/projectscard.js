import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./projectscard.css";

const ProjectsCard = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const description = props.description.map((d, index) => (
    <p key={index}>{d}</p>
  ));

  const videos = props.videos.map((v, index) => (
    <div key={index} className="iframe-container mb-5">
      <iframe src={"//www.youtube.com/embed/" + v} allowfullscreen></iframe>
    </div>
  ));

  const images = props.images.map((s, index) => (
      <div>

    <div class="card bg-dark text-white mb-2">
    <img className="card-img item-image" src={s.src} alt={s.text} />
  <div class="card-img-overlay mt-1">
    <h3 class="card-title text-center image-text">{s.text}</h3>
  </div>
</div>


      </div>
  ));

  const links = props.links.map((l, index) => (
      <div>
    <button
      key={index}
      type="button"
      className="link-button btn btn-lg btn-outline-info mx-2"
      onClick={() => window.open(l.url)}
    >
      <div className="link-text">{l.name}</div>
    </button>
      </div>

  ));

  const tags = props.tags.map((t, index) => (
    <div key={index} className="boxed">
      {t}
    </div>
  ));


      return <div className="px-0 mx-0 row ">
      <div onClick={handleShow} className="card mb-4 project-card rounded-0">
        <div class="row no-gutters" >
        <div class="col-md-4 thumbnail-frame">
            <img src={props.thumbnail} class="card-img project-thumbnail" alt="..." />
          </div>
          <div class="col-md-8 ">
            <div class="card-body h-100 d-flex align-items-center justify-content-center">
              <div className="row ">
                <div className="col ">
                  <div className="row d-flex align-items-center justify-content-center">
                    <h3 class="card-title">{props.name}</h3>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center">
                    {tags}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Modal show={show} onHide={handleClose} centered size="xl" scrollable>
        <Modal.Header closeButton>
          <Modal.Title className="row d-flex align-items-center justify-content-center">              
              <div className="row ">
                <div className="col ">
                  <div className="row d-flex align-items-center justify-content-center">
                    <h3 class="card-title">{props.name}</h3>
                  </div>
                  <div className="row d-flex align-items-center justify-content-center">
                    {tags}
                  </div>
                </div>
              </div>

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="mx-0 px-0">

          <div className="mb-5">{description}</div>

          <div className="row d-flex align-items-center justify-content-center mb-3">
            {links}
          </div>          
          <div className="mt-5">{videos}</div>
          <div className="row d-flex align-items-center justify-content-center mb-3">
            {images}
          </div>   
          
        </Modal.Body>

      </Modal>


    </div>

};

export default ProjectsCard;
