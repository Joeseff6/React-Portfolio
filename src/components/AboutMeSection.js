import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import List from "./List";
import ImageCarousel from "./ImageCarousel";
import FadeComponent from "./FadeComponent";
import CollapseComponent from "./CollapseComponent";
import { aboutMeImages, aboutMeListItems } from "../utils/mappedObjects/aboutMeObjects";

const AboutMeSection = () => {
  const [showOverflow, setShowOverflow] = useState("overflow-hidden");

  const onHover = () => {
    setShowOverflow("overflow-auto");
  };

  const onLeaveHover = () => {
    setShowOverflow("overflow-hidden");
  };

  return (
    <>
      <Col className="p-0" md={3}>
        <ImageCarousel images={aboutMeImages} />
      </Col>
      <Col>
        <FadeComponent fadeTimer={750}>
          <Row>
            <Header title="Who Am I?" />
          </Row>
          <Row>
            <Col>
              <Header title="My Bio" heading={2} bottomMargin={3} />
              <p
                className={`fs-5 px-4 lh-base ${showOverflow} bio`}
                onMouseEnter={onHover}
                onMouseLeave={onLeaveHover}
              >
                <span className="indent">Hi!</span> My name is Joseph Soria, and
                I am a graduate from the University of Houston. I majored in
                Mechanical Engineering, and have worked in the Oil and Gas
                industry since 2011. I am currently developing my Full Stack
                Engineering skills, with my main focus in Web Development using
                React. My Hobbies include shooting pool, trading in the stock
                market, and coding of course!
              </p>
            </Col>
            <Col>
              <Header title="Contact Me" heading={2} bottomMargin={3} />
              <CollapseComponent collapseTimer={1250}>
                <List listItems={aboutMeListItems} />
              </CollapseComponent>
            </Col>
          </Row>
        </FadeComponent>
      </Col>
    </>
  );
};

export default AboutMeSection;
