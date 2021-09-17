import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import FadeComponent from "./FadeComponent";
import CollapseComponent from "./CollapseComponent";

const TechnicalSkillsSection = () => {
  return (
    <>
      <Col>
        <Row>
          <h1>This is the heading</h1>
        </Row>
        <Row>
          <Col>
            <h1>These are my Technical Skills</h1>
          </Col>
          <Col>
            <h1>These are my preferred positions</h1>
          </Col>
        </Row>
      </Col>
      <Col>
        <h1>This is an image</h1>
      </Col>
    </>
  );
};

export default TechnicalSkillsSection;
