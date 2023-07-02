import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

import "./mainnavbar.css";

class MainNavBar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-lg navbar-dark fixed-top scroll";
    } else {
      document.querySelector(".navbar").className =
        "navbar navbar navbar-expand-lg navbar-dark fixed-top";
    }
  };

  render() {
    return (
      <div>
        <Navbar expand="lg" variant="dark" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="nav-text"
                spy={true}
                to="home"
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Home
              </Link>
              <Link
                className="nav-text"
                spy={true}
                to="about"
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                About
              </Link>
              <Link
                className="nav-text"
                spy={true}
                to="projects"
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Projects
              </Link>

              <Link
                className="nav-text"
                spy={true}
                to="contact"
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default MainNavBar;
