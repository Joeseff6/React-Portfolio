import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Fade from "react-bootstrap/Fade";
import "./Section.css";

const Section = ({ children }) => {
  const [ fadeIn, setFadeIn ] = useState(false);

  const delayFadeIn = () => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500)
  }

  return (
    <Fade appear={true} in={fadeIn} onEnter={delayFadeIn()}>
      <Row className="section mb-5">
        <h1>This component is used to wrap the sections</h1>
        {children}
      </Row>
    </Fade>
  );
};

export default Section;
