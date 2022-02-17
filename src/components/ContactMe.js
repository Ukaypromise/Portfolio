import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { BiLinkExternal } from "react-icons/bi";

function ContactMe() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0wfq3ue",
        "template_1ymyrba",
        formRef.current,
        "user_SRumVQbn1uGs5i1MyhTTw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.6em" }}>
              YOU CAN <span className="purple"> SEND </span> A MESSAGE
            </h1>
            <div class="right-side">
              <div class="topic-text">Send Me a message</div>
              <p>
                If you have any work for me or any types of quries related to my
                skills, you can send me message from here. It's my pleasure to
                help you.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="user_name"
                  />
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="user_email"
                  />
                </div>
                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="user_subject"
                  placeholder="Write something.."
                ></textarea>
                <button variant="primary">
                  <BiLinkExternal /> &nbsp;
                  {"Send"}
                </button>

                <p className="message-me">
                  {done &&
                    "Thank You For Contacting Me, I will get back to you"}
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default ContactMe;
