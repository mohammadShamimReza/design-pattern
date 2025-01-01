//Shamim Cart
import React from "react";


const Card = ({ title, description, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
