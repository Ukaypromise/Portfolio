import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/codeaddict.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Proactive Front-End Developer ready to acqiure some good
              experience. I am good at collaborating with creative and
              development teams on the execution of ideas and projects. I am
              passionate about software programming.
              <br />
              <br />I have learned programming languages such as are
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              Building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> as well
                as subjects relating
                <b className="purple">
                  Web 3 and UI/UX, are some of my areas of interest.
                </b>
              </i>
              <br />
              <br />I also use my enthusiasm for designing products with
              <b className="purple">React.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library, as well as frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND OUT MORE ABOUT ME</h1>
            <p>
              You can Follow and <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ukaypromise"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/PromiseUkay"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/promise-uka-5a1450173/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ukaypromise/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
