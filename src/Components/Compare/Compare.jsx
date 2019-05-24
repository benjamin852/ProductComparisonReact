import React from "react";

import "./Compare.css";

const Compare = props => {
  return (
      <div className="row compare">
      <div className="col-12 mt-5 text-center">
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th />
              {props.comparedProduct.map(product => {
                  return <th key={product.id}>{product.name}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            <tr className="price">
              <th scope="row">Price</th>
              {props.comparedProduct.map(product => {
                {
                  return (
                    <td key={product.id} className="text-center">
                      {product.price}
                    </td>
                  );
                }
              })}
            </tr>
            <tr className="colors">
              <th scope="row">Row</th>
              {props.comparedProduct.map(product => {
                return (
                  <td key={product.id}>
                    {product.colors.map((color, index) => {
                      return <span key={index} className={"bg-" + color} />;
                    })}
                  </td>
                );
              })}
            </tr>
            <tr className="condition">
              <th scope="row">Condition</th>
              {props.comparedProduct.map(product => {
                return (
                  <td
                    key={product.id}
                    className={
                      product.condition === "Frozen" ? "bg-red" : "bg-green"
                    }
                  >
                    {product.condition}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
