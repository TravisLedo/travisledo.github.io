import React, { Component } from "react";

import "./aboutpage.css";

class AboutPage extends Component {
  render() {
    return (
      <div id="about">
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="text-center section-title">About</h1>
        </div>

        <div className=" container d-flex align-items-center justify-content-center">
          <div className="row about-container pb-5 pt-5">
            <div className="col d-flex align-items-center justify-content-center">
              <img
                className="profile-image align-middle align-items-center "
                src="./assets/media/travis.png"
                alt="Travis"
              />
            </div>
            <div className="col">
              <div className="row px-5 d-flex align-items-center justify-content-center">
                <h3 className="text-center mb-5 pt-5">Travis Ledo</h3>
                <p className="text-left">
                  Hello! My name is Travis and I am an entry level software
                  engineer. I chose this career path because I believe that
                  technology will continue to make a difference in the world and
                  I wish to be part of that driving force. I hope to use my
                  development skills to enrich lives everywhere. If you have any
                  questions about my projects or want to reach out to me
                  regarding an open position, please feel free to contact me.
                </p>
              </div>
              <div className="row d-flex align-items-center justify-content-center mx-auto">
                <div className="col-auto px-1">
                  <div className="boxed">Frontend</div>
                </div>
                <div className="col-auto px-1">
                  <div className="boxed">Backend</div>
                </div>
                <div className="col-auto px-1">
                  <div className="boxed justify-content-start">
                    Desktop Applications
                  </div>
                </div>
                <div className="col-auto px-1">
                  <div className="boxed">Mobile</div>
                </div>
                <div className="col-auto px-1">
                  <div className="boxed">Game Development</div>
                </div>
                <div className="col-auto px-1">
                  <div className="boxed">Robotics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
