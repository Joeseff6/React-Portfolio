import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "../assets/images/Profilepic.jpg";
import Container from "react-bootstrap/Container";

const AboutMeSection = () => {
  return (
    <>
      <Col className="p-0 h-100 d-flex" md={3} >
        <Image src={ProfilePic} fluid rounded className="h-100 flex-grow-1" />
      </Col>
      <Col>
        <Row>
          <h1 className="my-2 fs-1 text-center" style={{border: "black 2px solid"}}>Who Am I?</h1>
        </Row>
        <Row style={{border: "black 2px solid"}}>
          <Col>
            <h1 className="mb-2 fs-2 text-center">My Bio</h1>
            <p className="fs-5 px-5">This is some text </p>
          </Col>
          <Col>
            <h1 className="mb-2 fs-2 text-center">Contact Me</h1>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AboutMeSection;
