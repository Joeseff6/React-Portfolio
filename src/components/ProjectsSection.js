import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  projects,
} from "../utils/mappedObjects/projectsObjects";
import Header from "./Header";
import ProjectCards from "./ProjectCards";
import ProjectTiles from "./ProjectTiles";
import TilePagination from "./TilePagination";

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const numberOfPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <Row className="my-5 project-section">
      <Col>
        <Row>
          <Header title="My Projects" heading={1} bottomMargin={4} />
        </Row>
        <Row className="justify-content-center mb-5 py-4 project-tile-row" >
          <ProjectTiles projects={currentProjects} />
          {/* <ProjectCards projects={currentProjects} /> */}
          <TilePagination numberOfPages={numberOfPages} />
        </Row>
      </Col>
    </Row>
  );
};

export default ProjectsSection;
