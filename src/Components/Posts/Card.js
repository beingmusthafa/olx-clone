import React from "react";
import { Heart } from "react-bootstrap-icons";

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="favorite">
        <Heart></Heart>
      </div>
      <div className="image">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="content">
        <p className="rate">&#x20B9; {product.price}</p>
        <span className="kilometer">{product.category}</span>
        <p className="name">{product.name}</p>
      </div>
      <div className="date">
        <span>10/5/2021</span>
      </div>
    </div>
  );
};

export default Card;
