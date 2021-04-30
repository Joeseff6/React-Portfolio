import React from 'react';
import '../../styles/ImgCard.css'


function ImgCard({src,alt,caption}) {
  return (
    <div className="card">
      <img src={src} className="" alt={alt} />
      <div className="card-body">
        <p className="card-text">{caption}</p>
      </div>
    </div>
  )
}

export default ImgCard;