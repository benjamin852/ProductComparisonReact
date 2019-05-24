import React from "react";

import "./Product.css";

const Product = props => {
  return (
    <div key={props.product.key} className="col-sm-6 col-md-3">
      <div className={"product " + (props.product.compare ? "compare" : "")}>
        <img src={props.product.image} alt={props.product.image} />
        <div className="image_overlay" />
        <div
          className="view_details"
          onClick={() => props.compare(props.product)}
        >
          {props.product.compare ? "Remove" : "Compare"}
        </div>
        <div className="stats">
          <div className="stats-container">
            <span className="product_price">{props.product.price}</span>
            <span className="product_name">{props.product.name}</span>
            <p>{props.product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Product;
