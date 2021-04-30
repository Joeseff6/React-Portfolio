import React from 'react';

function Header({ heading }) {
  return (
    <div className="row d-flex justify-content-center my-3">
      <div className="col-11">
        <h1 className="text-center">{heading}</h1>
      </div>
    </div>
  )
}

export default Header;