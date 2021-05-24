import React, { Component } from "react";

import "./aboutpage.css";

class AboutPage extends Component {
  render() {
    return (
      <div id="about">
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="text-center section-title">About</h1>
        </div>

        <div className="hand-written pt-5 pb-5 container d-flex align-items-center about-container justify-content-center border">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <img
                id="profile-image"
                className="align-middle align-items-center pt-4 pb-4"
                src="./assets/media/travis.png"
              />
            </div>
            <div className="col px-5">
              <div className="row px-5 d-flex align-items-center justify-content-center">
                <h3 className="text-center mb-5">Travis Ledo</h3>
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

              <div className="row d-flex align-items-center justify-content-center mt-5">
                <div className="boxed">Android Studio</div>
                <div className="boxed">Unity</div>
                <div className="boxed">Qt</div>
                <div className="boxed">Arduino</div>
                <div className="boxed">Git</div>
                <div className="boxed">Jira</div>
                <div className="boxed">Angular</div>
                <div className="boxed">React</div>
                <div className="boxed">NodeJS</div>
                <div className="boxed">HTML</div>
                <div className="boxed">CSS</div>
                <div className="boxed">JavaScript</div>
                <div className="boxed">Java</div>
                <div className="boxed">C#</div>
                <div className="boxed">C++</div>
                <div className="boxed">C</div>
                <div className="boxed">Python</div>
                <div className="boxed">Raspberry Pi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
