import "./ProjectCard.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";

const ProjectCard = ({ project, handleClick }) => {
  return (
    <Col className="d-flex align-items-center justify-content-center mb-2">
      <Card className="mx-4">
        <CloseButton onClick={handleClick} />
        <p className="fs-1 text-center my-3" id={project.id}>
          {project.title}
        </p>
        <p className="text-center mb-2">
          Github Repo:{" "}
          <a href={project.repoLink} target="_blank" rel="noreferrer">
            {project.repoLink}
          </a>
        </p>
        {project.deployedLink && (
          <p className="text-center mb-2">
            Deployed Link:{" "}
            <a href={project.deployedLink} target="_blank" rel="noreferrer">
              {project.deployedLink}
            </a>
          </p>
        )}

        <p className="text-center mb-2">Skills used: {project.skills}</p>
        <Card.Img src={project.image} alt={project.alt} />
        <p className="my-3 px-5 lh-base">{project.description}</p>
      </Card>
    </Col>
  );
};

export default ProjectCard;
