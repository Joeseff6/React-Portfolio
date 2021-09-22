import Button from "react-bootstrap/Button";
import StayRnb from "../assets/images/StayRnb.JPG";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProjectTiles = ({ projects }) => {
  return (
    <Col className="d-flex align-items-center justify-content-center">
      {projects.map((project) => {
        return (
          <Card key={project.title} className="mx-4">
            <Card.Img src={project.image} alt={project.alt}/>
            <Card.Body className="p-2">
              <Card.Title className="mb-1 text-center">{project.title}</Card.Title>
              <Card.Text className="mb-1">{project.repoLink}</Card.Text>
              <Card.Text className="mb-1">{project.deployedLink}</Card.Text>
              <Card.Text className="mb-1">{project.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
};

export default ProjectTiles;
