import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageCarousel from "./ImageCarousel";
import {
  projectImages,
  projects,
} from "../utils/mappedObjects/projectsObjects";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import ProjectTiles from "./ProjectTiles";

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <Col className="p-0" md={3}>
        <ImageCarousel images={projectImages} />
      </Col>
      <Col>
        <Row>
          <Header title="My Projects" heading={1} />
        </Row>
        <Row className="px-2" style={{ height: "298px" }}>
          <ProjectTiles projects={currentProjects}/>
        </Row>
      </Col>
    </>
  );
};

export default ProjectsSection;
