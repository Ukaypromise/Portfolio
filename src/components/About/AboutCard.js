import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Promise Uka </span>
            from <span className="purple"> Nigeria.</span>
            <br />I am a Tech-Savy Civil/Structural Engineer who has found
            passion in Frontend Developement
            <br />
            <br />
            Apart from coding, some other activities that I love to do includes-
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technical Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about{" "}
              <span className="purple"> WEB 3</span>
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Software must first be useable before it can be reusable.
            Efficiency thrives on simplicity. Make it work, make it right, and
            make it happen quickly."{" "}
          </p>
          <footer className="blockquote-footer">Dev Promise</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
