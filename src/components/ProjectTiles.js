import Col from "react-bootstrap/Col";

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
            <a href={`#${project.id}`} className="mt-1 d-block mx-auto btn" data-id={project.id} onClick={(e) => handleClick(e.target.dataset.id)}>
              <span data-id={project.id}>{project.title}</span>
            </a>
          </Col>
        );
      })}
    </>
  );
};

export default ProjectTiles;
