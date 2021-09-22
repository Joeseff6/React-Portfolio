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
import ProjectCards from "./ProjectCards";

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
    <Row className="my-5 project-section">
      <Col>
        <Row>
          <Header title="My Projects" heading={1}  bottomMargin={4}/>
        </Row>
        <Row className="justify-content-center mb-5">
          <ProjectCards projects={currentProjects} />
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectsSection;
