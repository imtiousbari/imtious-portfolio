import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Emailjs = () => {
  const notify = () => toast("Message Sent Suceesfuly!",{theme:'dark'});
  const formInitialDetails = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message_body: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_g9ftgqc",
        "template_mzy1azl",
        form.current,
        "28RjFHkWKSGN-P-14"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setButtonText("Send Message");
            setFormDetails(formInitialDetails);
            // alert('Message sent')
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="sendemail">
      
      <Container>
      
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
            <div>
              hello
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""} style={{padding:'30px'}}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="first_name"
                          value={formDetails.first_name}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("first_name", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="last_name"
                          value={formDetails.last_name}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("last_name", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone_number"
                          value={formDetails.phone_number}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone_number", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message_body"
                          value={formDetails.message_body}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message_body", e.target.value)
                          }
                        ></textarea>
                        <button type="submit" onClick={notify}>
                          <span>{buttonText}</span>
                        </button>
                        <ToastContainer />
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};
