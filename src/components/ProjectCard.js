import Button from "react-bootstrap/Button";
import StayRnb from "../assets/images/StayRnb.JPG";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProjectCard = ({ project }) => {
  // return (
  //   <Col className="d-flex align-items-center justify-content-center">
  //     <Card className="mx-4">
  //       <Card.Img src={project.image} alt={project.alt} />
  //       <Card.Body className="p-2">
  //         <Card.Title className="mb-1 text-center">{project.title}</Card.Title>
  //         <Card.Text className="mb-1">
  //           Repo Link:{" "}
  //           <a href={project.repoLink} target="_blank" rel="noreferrer">
  //             {project.repoLink}
  //           </a>
  //         </Card.Text>
  //         <Card.Text className="mb-1">
  //           Deployed Link:{" "}
  //           <a href={project.deployedLink} target="_blank" rel="noreferrer">
  //             {project.deployedLink}
  //           </a>
  //         </Card.Text>
  //         <Card.Text className="mb-1">{project.description}</Card.Text>
  //       </Card.Body>
  //     </Card>
  //   </Col>
  // );

  return (
    <Col className="d-flex align-items-center justify-content-center">
      <Card className="mx-4">
        <p className="fs-1 text-center my-3">{project.title}</p>
        <p className="text-center mb-2">
          Github Repo:{" "}
          <a href={project.repoLink} target="_blank" rel="noreferrer">
            {project.repoLink}
          </a>
        </p>
        <p className="text-center mb-2">
          Deployed Link:{" "}
          <a href={project.deployedLink} target="_blank" rel="noreferrer">
            {project.deployedLink}
          </a>
        </p>
        <p className="text-center my-2">Skills used: {project.skills}</p>
        <Card.Img src={project.image} alt={project.alt} />
        <p className="my-3 px-4">{project.description}</p>
      </Card>
    </Col>
  );
};

export default ProjectCard;
