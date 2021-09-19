import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageCarousel from "./ImageCarousel";
import { projectImages } from "../utils/mappedObjects/projectsObjects";
import Header from "./Header";

const ProjectsSection = () => {
  return (
    <>
      <Col className="p-0" md={3}>
        <ImageCarousel images={projectImages} />
      </Col>
      <Col>
        <Row>
          <Header title="My Projects" heading={1}/>
        </Row>
        <Row></Row>
      </Col>
    </>
  );
};

export default ProjectsSection;
