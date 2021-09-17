import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

const List = () => {
  const [transformText, setTransformText] = useState(false);

  const handleHover = () => {
    setTransformText(!transformText);
  };

  const handleHLeaveHover = () => {
    setTransformText(!transformText);
  };

  return (
    <ListGroup className="text-center">
      <ListGroup.Item>
        Email:{" "}
        <a href="mailto: josephsoria6@gmail.com">josephsoria6@gmail.com</a>
      </ListGroup.Item>
      <ListGroup.Item
        onMouseEnter={handleHover}
        onMouseLeave={handleHLeaveHover}
      >
        Phone: {!transformText ? "Hover to display!" : "832-657-9060"}
      </ListGroup.Item>
      <ListGroup.Item>
        Github:{" "}
        <a href="https://github.com/Joeseff6" 
          target="_blank" 
          rel="noreferrer"
          >
            www.github.com/joeseff6
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/joseph-soria-5a335845/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/joseph-soria-5a335845/
        </a>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default List;
