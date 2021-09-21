import React from "react";
import Row from "react-bootstrap/Row";
class Section extends React.Component {
  render() {
    return (
      <Row className={`section-fade-${this.props.fadeDirection} my-5 justify-content-center`}>
        {this.props.children}
      </Row>
    )
  }
}

Section.defaultProps = {
  fadeDirection: "right",
}

export default Section;
