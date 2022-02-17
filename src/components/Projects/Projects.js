import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";

import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";
import project6 from "../../Assets/Projects/project6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              title="Tesla Clone"
              description="A Tesla Clone from the popular Tesla company. Built using React JS and Redux."
              link="https://github.com/Ukaypromise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              title="ShugaPlum Cakes "
              description="Landing Page For Shugaplum Cakes. A web Application for placing order for cakes and other pastery. Built using HTML and CSS"
              link="https://github.com/Ukaypromise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              title="Mobile App"
              description="UI/UX Design. Designed using Figma"
              link="https://github.com/Ukaypromise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              title="Landing Page"
              description="Built Using HTML, CSS and Bootstrap"
              link="https://github.com/Ukaypromise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              title="Graphics Design"
              description="Logo Design using Adobe Illustrator"
              link="https://github.com/Ukaypromise"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
              title="Portfolio App"
              description="My first personal portfolio app build with ReactJs and Redux with styled component."
              link="https://github.com/Ukaypromise"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/file/d/12PiOx6UJXHNX0SnLOyPgOLqy58Q_tm4l/view?usp=drivesdk"
            }
            target="_blank"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
