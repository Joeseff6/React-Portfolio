import Button from "react-bootstrap/Button";
import StayRnb from "../assets/images/StayRnb.JPG";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProjectTiles = ({ projects }) => {
  return (
    <Col className="d-flex align-items-center">
      {projects.map((project) => {
        return (
          <Card key={project.title}>
            <Card.Img src={project.src} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Col>
  );
};

export default ProjectTiles;
