import React from "react";
import { NavLink } from "react-router-dom";
import './Products.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card card">
      <img
        src={product.imageId}
        alt={product.productName}
        className="card-img-top"
        style={{ height: "250px" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text text-muted">Price : &#8377; {product.productPrice}</p>
        <div className="d-flex justify-content-evenly">
          <NavLink
            rel="noreferrer"
            to={`/products/${product.productId}`}
            className="btn btn-sm btn-dark"
          >
            View More
          </NavLink>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-bag-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
