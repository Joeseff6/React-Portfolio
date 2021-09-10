import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "../assets/images/Profilepic.jpg";
import Container from "react-bootstrap/Container";
import Header from "./Header";

const AboutMeSection = () => {
  return (
    <>
      <Col className="p-0 h-100 d-flex" md={3}>
        <Image src={ProfilePic} fluid rounded className="h-100 flex-grow-1" />
      </Col>
      <Col>
        <Row>
          <Header title="Who Am I?" fontSize={1} />
        </Row>
        <Row style={{ border: "black 2px solid" }}>
          <Col>
            <Header title="My Bio" fontSize={2} />
            <p className="fs-5 px-5">This is some text </p>
          </Col>
          <Col>
            <Header title="Contact Me" fontSize={2} />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default AboutMeSection;
