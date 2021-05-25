import { React, Component } from "react";
import "./contactpage.css";
import { Link } from "react-scroll";


class ContactPage extends Component {
  render() {
    return (
      <div id="contact">


<div className="d-flex align-items-center justify-content-center ">
          <h1 className="text-center section-title">
            Contact
          </h1>
        </div>
        <div className="d-flex align-items-center justify-content-center container ">
          <div className="row container contact-container border px-0 ">
            <div
              className="col container left-image"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/assets/media/keyboard.jpg"
                }`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div className="col contact-links-area d-flex align-items-center justify-content-left ">
              <div className="row">
                <div className="col">
                  <img
                    class="profile-image"
                    src="/assets/media/traviscartoon.png"
                  />
                </div>
                <div className="container col d-flex align-items-center">
                  <div className="row  ">
                    <Link
                    to=""
                      className="mb-2"
                      onClick={() =>
                        window.open("mailto: travis.ledo@gmail.com")
                      }
                    >
                      <button
                        type="button"
                        className="social-button btn btn-lg d-flex align-items-center justify-content-left "
                      >
                        <img
                          className="social-icon"
                          src="/assets/media/icons/email.png"
                        />
                        <div className="social-text">Email</div>
                      </button>
                    </Link>

                    <Link
                    to=""
                      className="mb-2"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/travisledo"
                        )
                      }
                    >
                      <button
                        type="button"
                        className="social-button btn btn-lg d-flex align-items-center justify-content-left "
                      >
                        <img
                          className="social-icon"
                          src="/assets/media/icons/facebook.png"
                        />
                        <div className="social-text">Facebook</div>
                      </button>
                    </Link>

                    <Link
                    to=""
                      className="mb-2"
                      onClick={() =>
                        window.open("https://www.linkedin.com/in/travisledo/")
                      }
                    >
                      <button
                        type="button"
                        className="social-button  btn btn-lg d-flex align-items-center justify-content-left "
                      >
                        <img
                          className="social-icon"
                          src="/assets/media/icons/linkedin.png"
                        />
                        <div className="social-text">LinkedIn</div>
                      </button>
                    </Link>

                    <Link
                    to=""
                      className="mb-2"
                      onClick={() =>
                        window.open("https://github.com/TravisLedo")
                      }
                    >
                      <button
                        type="button"
                        className="social-button  btn k btn-lg d-flex align-items-center justify-content-left "
                      >
                        <img
                          className="social-icon"
                          src="/assets/media/icons/github.png"
                        />
                        <div className="social-text">Github</div>
                      </button>
                    </Link>

                    <Link
                    to=""
                      className="mb-2"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/channel/UCUkt5j4zHCLE7tEs4yENgPw"
                        )
                      }
                    >
                      <button
                        type="button"
                        className="social-button  btn btn-lg d-flex align-items-center justify-content-left "
                      >
                        <img
                          className="social-icon"
                          src="/assets/media/icons/youtube.png"
                        />
                        <div className="social-text">Youtube</div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
