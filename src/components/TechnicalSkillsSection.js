import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import FadeComponent from "./FadeComponent";
import CollapseComponent from "./CollapseComponent";
import List from "./List";
import ImageCarousel from "./ImageCarousel";
import { technicalImages } from "../utils/listObjects";

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
      <Col md={3}>
        <ImageCarousel images={technicalImages} />
      </Col>
    </>
  );
};

export default TechnicalSkillsSection;
