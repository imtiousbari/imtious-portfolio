import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import  iconsgithub  from "../assets/img/iconsgithub.svg";
import  mail  from "../assets/img/mail.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="text-center text-sm-start">
            {/* <p>mdimtiousbari@gmail.com</p> */}
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/imtiousbari" target="_blank"><img src={iconsgithub} alt="" /></a>
                <a href="https://www.linkedin.com/in/mdimtiousbari" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/imtious"  target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/imtious_" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=mdimtiousbari@gmail.com&body=Hello%20Imtious," target="_blank"><img src={mail} alt="" /></a>
            </div>
            <p>Copyright {new Date().getUTCFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
