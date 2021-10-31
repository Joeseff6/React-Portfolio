import "./Section.css";
import React from "react";
import Row from "react-bootstrap/Row";
class Section extends React.Component {
  render() {
    return (
      <Row className="section-row my-5 justify-content-center">
        {this.props.children}
      </Row>
    )
  }
}

export default Section;
