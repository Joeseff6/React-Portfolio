import "./Nav.css";
import Resume from "../assets/files/JosephSoriaResume.pdf";
import React from "react";
import Nav from "react-bootstrap/Nav";
class Navbar extends React.Component {
  render() {
    return (
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#about-me" className="navbar-brand">Joseph Soria</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about-me">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={Resume} target="_blank" rel="noreferrer">
            My Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navbar;
