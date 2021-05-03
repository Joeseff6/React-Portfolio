import { useState } from 'react';

function List({ items, name }) {
  const [classes,setClasses] = useState("list-group d-none")

  const handleToggle = () => {
    if (classes === "list-group d-none") {
      setClasses("list-group")
    } else {
      setClasses("list-group d-none")
    }
  }

  return (
    <div className="row">
      <button
        className="btn"
        type="button"
        onClick={handleToggle}
      >
      {name}
      </button>
      <ul className={classes}>
        {items?.map(item => (
          <li
            key={item}
            className="list-group-item text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;