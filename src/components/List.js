import "./List.css";
import ListGroup from "react-bootstrap/ListGroup";

const List = ({ listItems }) => {
  return (
    <ListGroup className="text-center lh-sm">
      {listItems.map((listItem) => {
        return (
          <ListGroup.Item key={listItem.itemText}>
            {listItem.icon ? (
              <listItem.icon size={24} className="list-icon" />
            ) : (
              ""
            )}
            {listItem.itemText}
            <a href={listItem.link} target="_blank" rel="noreferrer">
              {listItem.linkText}
            </a>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default List;
