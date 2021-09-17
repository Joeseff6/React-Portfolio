import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import {
  InboxFill,
  PhoneVibrateFill,
  Github,
  Linkedin,
} from "react-bootstrap-icons";

const List = () => {
  const [transformText, setTransformText] = useState(false);

  const handleHover = () => {
    setTransformText(!transformText);
  };

  const handleHLeaveHover = () => {
    setTransformText(!transformText);
  };

  return (
    <ListGroup className="text-center lh-sm">
      <ListGroup.Item>
        <InboxFill className="" size={24} />
        Email:{" "}
        <a href="mailto: josephsoria6@gmail.com">josephsoria6@gmail.com</a>
      </ListGroup.Item>
      <ListGroup.Item
        onMouseEnter={handleHover}
        onMouseLeave={handleHLeaveHover}
      >
        <PhoneVibrateFill size={24} />
        Phone: {!transformText ? "Hover to display!" : "832-657-9060"}
      </ListGroup.Item>
      <ListGroup.Item>
        <Github size={24} />
        Github:{" "}
        <a href="https://github.com/Joeseff6" target="_blank" rel="noreferrer">
          See my repos!
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <Linkedin size={24} />
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/joseph-soria-5a335845/"
          target="_blank"
          rel="noreferrer"
        >
          Connect with me!
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default List;
