import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Fade from "react-bootstrap/Fade";
import "./Section.css";

const Section = ({ children, fadeDirection }) => {
  const [ fadeIn, setFadeIn ] = useState(false);

  const delayFadeIn = () => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500)
  }

  return (
    <Fade appear={true} in={fadeIn} onEnter={delayFadeIn()}>
      <Row className={`section-fade-${fadeDirection} my-5`}>
        {children}
      </Row>
    </Fade>
  );
};

export default Section;
