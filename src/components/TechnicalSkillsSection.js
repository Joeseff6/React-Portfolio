import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import FadeComponent from "./FadeComponent";
import CollapseComponent from "./CollapseComponent";
import Carousel from "react-bootstrap/Carousel";

const TechnicalSkillsSection = () => {
  return (
    <>
      <Col>
        <Row>
          <Header title="Technical Skills" />
        </Row>
        <Row>
          <Col>
            <Header
              title="My Technical Skills"
              heading={3}
              verticalMargin={3}
            />
          </Col>
          <Col>
            <Header
              title="Preferred Positions"
              heading={3}
              verticalMargin={3}
            />
          </Col>
        </Row>
      </Col>
      <Col>
        <Image src="" fluid rounded className="h-100 flex-grow-1" />
      </Col>
    </>
  );
};

export default TechnicalSkillsSection;
