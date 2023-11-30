import React from "react";
import "./ProductCard.css";
import { products } from "../../helper/data";

const ProductCard = () => {
  return (
    <div className="cards">
      {products.map((item) => (
        <div className="card-main">
          <div className="card-img">
            <img src={item.image} alt="product" />
          </div>
          <div className="card-body">
            <h3>{item.title}</h3>
          </div>
          <div className="price">
            <h4>{item.price} $</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
