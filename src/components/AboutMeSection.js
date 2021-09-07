import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "../assets/images/Profilepic.jpg";
import Container from "react-bootstrap/Container";

const AboutMeSection = () => {
  return (
    <>
      <Col className="p-0 h-100">
        <Image src={ProfilePic} fluid rounded className="h-100" />
      </Col>
      <Col></Col>
      <Col></Col>
    </>
  );
};

export default AboutMeSection;
