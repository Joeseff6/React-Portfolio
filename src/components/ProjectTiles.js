import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProjectTiles = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Col>
            <img
              src={project.image}
              alt={project.alt}
              className="project-tile-image d-block mx-auto"
            />
            <Button className="mt-1 d-block mx-auto">
              <span>{project.title}</span>
            </Button>
          </Col>
        );
      })}
    </>
  );
};

export default ProjectTiles;
