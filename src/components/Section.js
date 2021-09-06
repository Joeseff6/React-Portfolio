import React from 'react';
import Row from "react-bootstrap/Row";
import "./Section.css";

const Section = ({ children }) => {
  return (
    <Row className="section mb-5">
      <h1>This component is used to wrap the sections</h1>
      {children}
    </Row>
  )
}

export default Section;
