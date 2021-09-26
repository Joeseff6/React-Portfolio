import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProjectTiles = ({ projects, handleClick }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Col key={project.id}>
            <img
              src={project.image}
              alt={project.alt}
              className="project-tile-image d-block mx-auto"
            />
            <Button className="mt-1 d-block mx-auto" data-id={project.id} onClick={(e) => handleClick(e.target.dataset.id)}>
              <span data-id={project.id}>{project.title}</span>
            </Button>
          </Col>
        );
      })}
    </>
  );
};

export default ProjectTiles;
