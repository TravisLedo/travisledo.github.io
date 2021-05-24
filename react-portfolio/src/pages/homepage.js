import React, { Component } from "react";
import "./homepage.css";
import { Link } from "react-scroll";

class HomePage extends Component {
  render() {
    return (
      <div id="home" className="">
        <div className="hero-container d-flex align-items-center justify-content-center mx-0 px-0">
          <div className="jumbotron bg-transparent">
            <div className="d-flex align-items-center justify-content-center mx-0 px-0">
              <h1 className="hero-title text-light text-center mx-0 px-0">
                “It's not a faith in technology. It's faith in people.”
              </h1>
            </div>
            <h5 className="text-light text-center">-Steve Jobs</h5>

            <div className="container d-flex align-items-center justify-content-center">
              <div className="row justify-content-md-center d-flex align-items-center justify-content-center">
                <div className="col-md-auto d-flex align-items-center justify-content-center mt-5">
                  <Link
                  to=""
                    className="mx-2"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/11xuz03B0Ml9n-mK6ylKkbwwQTAnFphbH/view?usp=sharing"
                      )
                    }
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg quick-link-button"
                    >
                      <div className="quick-link-text">Resume</div>
                    </button>
                  </Link>
                  <Link
                    className="mx-2"
                    spy={true}
                    to="projects"
                    smooth={true}
                    duration={1000}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg quick-link-button"
                    >
                      <div className="quick-link-text">Explore</div>
                    </button>
                  </Link>
                  <Link
                    className="mx-2"
                    spy={true}
                    to="contact"
                    smooth={true}
                    duration={1000}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light btn-lg quick-link-button"
                    >
                      <div className="quick-link-text">Connect</div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
