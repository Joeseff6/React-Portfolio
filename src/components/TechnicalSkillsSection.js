import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import FadeComponent from "./FadeComponent";
import CollapseComponent from "./CollapseComponent";
import List from "./List";
import ImageCarousel from "./ImageCarousel";
import { technicalSkillsListItems } from "../utils/listObjects";
import { technicalImages } from "../utils/listObjects";

const TechnicalSkillsSection = () => {
  const [showOverflow, setShowOverflow] = useState("overflow-hidden");

  const onHover = () => {
    setShowOverflow("overflow-auto");
  };

  const onLeaveHover = () => {
    setShowOverflow("overflow-hidden");
  };

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
            <div
              className={`${showOverflow} skills-list-box p-4`}
              onMouseEnter={onHover}
              onMouseLeave={onLeaveHover}
            >
              <List listItems={technicalSkillsListItems} />
            </div>
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
