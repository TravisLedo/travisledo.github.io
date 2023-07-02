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
    <div key={index} className="iframe-container mx-0 px-0 mb-2">
      <iframe
        title={v}
        src={"//www.youtube.com/embed/" + v}
        allowFullScreen
      ></iframe>
    </div>
  ));

  const images = props.images.map((s, index) => (
    <div key={index} className="container mx-0 px-0">
      <div className="card bg-dark text-white mb-2">
        <img className="card-img item-image" src={s.src} alt={s.text} />
        <div className="card-img-overlay mt-1">
          <h4 className="text-center image-text">{s.text}</h4>
        </div>
      </div>
    </div>
  ));

  const links = props.links.map((l, index) => (
    <div key={index} className="col-auto">
      <button
        type="button"
        className="link-button btn btn-lg btn-outline-info mx-2"
        onClick={() => window.open(l.url)}
      >
        <div className="link-text">{l.name}</div>
      </button>
    </div>
  ));

  const tags = props.tags.map((t, index) => (
    <div key={index} className="col-auto px-1">
      <div className="boxed">{t}</div>
    </div>
  ));

  return (
    <div className="px-0 mx-0 row ">
      <div onClick={handleShow} className="card mb-4 project-card rounded-0">
        <div className="row no-gutters">
          <div className="col-md-4 thumbnail-frame">
            <img
              src={props.thumbnail}
              className="card-img project-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body h-100 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col ">
                  <div className="row d-flex align-items-center justify-content-center">
                    <h3 className="card-title">{props.name}</h3>
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

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="xl"
        scrollable
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="row d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col ">
                <div className="row d-flex align-items-center justify-content-center">
                  <h3 className="card-title text-center">{props.name}</h3>
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                  {tags}
                </div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="mb-5">{description}</div>

          <div className="row d-flex align-items-center justify-content-center mb-5">
            {links}
          </div>
          <div>
            {videos}
            {images}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectsCard;
