import { useState } from "react";

function List({ items, name }) {
  const [classes, setClasses] = useState("list-group d-none");

  const handleToggle = () => {
    if (classes === "list-group d-none") {
      setClasses("list-group");
    } else {
      setClasses("list-group d-none");
    }
  };

  return (
    <div className="row">
      <a className="btn mb-2" href={"#" + name.split(" ")[0]} onClick={handleToggle}>
        {name}
      </a>
      <ul className={classes} id={name.split(" ")[0]}>
        {items?.map((item) => (
          <li key={item} className="list-group-item text-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
