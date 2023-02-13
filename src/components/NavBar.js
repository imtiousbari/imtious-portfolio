import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import  iconsgithub  from "../assets/img/iconsgithub.svg";
import  mail  from "../assets/img/mail.svg";
import { HashLink } from 'react-router-hash-link';
// import { Emailjs } from "./Emailjs";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img 
            className="mobilelogo"
            
            style={{"minwidth" : "150px"}} 
            src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/imtiousbari" target="_blank"><img src={iconsgithub} alt="" /></a>
                <a href="https://www.linkedin.com/in/mdimtiousbari" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/imtious"  target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/imtious_" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=mdimtiousbari@gmail.com&body=Hello%20Imtious," target="_blank"><img src={mail} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
              <HashLink to='#sendemail'>
                
                <button className="">
                  <span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
