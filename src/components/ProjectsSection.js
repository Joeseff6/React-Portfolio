import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { projects } from "../utils/mappedObjects/projectsObjects";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import ProjectTiles from "./ProjectTiles";
import TilePagination from "./TilePagination";
import Button from "react-bootstrap/Button";

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [project, setProject] = useState(projects[0]);
  const [show, setShow] = useState(false);

  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const numberOfPages = Math.ceil(projects.length / projectsPerPage);

  const handlePaginationPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleButtonPageChange = (e) => {
    if (
      (e.target.dataset.direction === "left" && currentPage === 1) ||
      (e.target.dataset.direction === "right" && currentPage === numberOfPages)
    ) {
      return;
    }
    if (e.target.dataset.direction === "left") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleProjectSelection = (id) => {
    setProject(projects[id]);
    setShow(true);
  };

  const handleCloseButton = () => {
    setShow(false);
  };

  return (
    <Row className="my-5 project-section">
      <Col>
        <Row>
          <Header title="My Projects" heading={1} bottomMargin={4} id="projects"/>
        </Row>
        <Row className="justify-content-center mb-4 py-4 project-tile-row">
          <Col>
            <Row className="mb-3">
              <Col className="d-flex justify-content-end">
                <Button
                  className="paginationButton"
                  data-direction="left"
                  onClick={handleButtonPageChange}
                  variant=""
                >
                  <span data-direction="left">Previous</span>
                </Button>
              </Col>
              <Col
                className="d-flex align-items-center justify-content-center"
                xs={2}
              >
                <TilePagination
                  numberOfPages={numberOfPages}
                  handleClick={handlePaginationPageChange}
                  currentPage={currentPage}
                />
              </Col>
              <Col className="d-flex justify-content-start">
                <Button
                  className="paginationButton"
                  data-direction="right"
                  onClick={handleButtonPageChange}
                  variant=""
                >
                  <span data-direction="right">Next</span>
                </Button>
              </Col>
            </Row>
            <Row>
              <ProjectTiles
                projects={currentProjects}
                handleClick={handleProjectSelection}
              />
            </Row>
          </Col>
        </Row>
        {show && (
          <ProjectCard project={project} handleClick={handleCloseButton} />
        )}
      </Col>
    </Row>
  );
};

export default ProjectsSection;
