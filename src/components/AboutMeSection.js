import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "../assets/images/Profilepic.jpg";
import Container from "react-bootstrap/Container";

const AboutMeSection = () => {
  return (
    <>
      <Col className="p-0 h-100 image-column" >
        <Image src={ProfilePic} fluid rounded className="h-100" />
      </Col>
      <Col className="text-center">
        <Row className="header-row">
          <h1 className="align-middle">about me</h1>
        </Row>
        <Row>
          <Col>
            <h1>Bio</h1>
          </Col>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AboutMeSection;
