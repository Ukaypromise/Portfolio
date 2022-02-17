import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Address</h3>

          <h3>Port Harcourt</h3>
          <h3>Nigeria</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Phone Number</h3>
          <h3>+2347064505393</h3>
          <h3>+2348170118360</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Email</h3>
          <h3>promiseukaimo@gmail.com</h3>
          <h3>citadelengr@gmail.com</h3>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Promise Uka</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Dev Promise-Code Addict</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Ukaypromise"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/PromiseUkay"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/promise-uka-5a1450173/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ukaypromise/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
