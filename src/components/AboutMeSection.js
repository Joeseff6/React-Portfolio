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
        <Row>
          <Col>
            <Header title="My Bio" fontSize={2} />
            <p className="fs-5 px-5">
              <span className="indent">Hi!</span> My name is Joseph Soria, and I am a graduate from the
              University of Houston. I majored in Mechanical Engineering, and have worked in the Oil and Gas industry
              since 2011. I am currently developing my Full Stack Engineering skills, with my main focus in 
              Web Development using React. My Hobbies include shooting pool, trading in the stock market, 
              and coding of course!
            </p>
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
