import React from "react";
import Nav from "react-bootstrap/Nav";
import Resume from "../assets/files/JosephSoriaResume.pdf"

class Navbar extends React.Component {
  render() {
    return (
      <Nav
        activeKey="/home"
      >
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
          <Nav.Link href={Resume} target="_blank" rel="noreferrer">My Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default Navbar;
