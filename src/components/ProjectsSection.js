import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageCarousel from "./ImageCarousel";
import { projectImages } from "../utils/mappedObjects/projectsObjects";


const ProjectsSection = () => {
  return (
    <>
      <Col className="p-0" md={3}>
        <ImageCarousel images={projectImages}/>
      </Col>
      <Col>
      </Col>
    </>
  );
};

export default ProjectsSection;
