import React from "react";
import { Helmet } from "react-helmet";
import ProductCard from "./ProductCard";
import "./Product.css";

const Products = () => {
  const products = [
    {
      name: "Cricket Kit",
      id:1,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/"
    },
    {
        name: "Cricket Kit",
        id:2,
        productPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
        sellerId: 1,
        price: 2500,
        url: "/"
      },
      {
        name: "Cricket Kit",
        id:3,
        productPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
        sellerId: 1,
        price: 2500,
        url: "/"
      },
      {
        name: "Cricket Kit",
        id:4,
        productPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
        sellerId: 1,
        price: 2500,
        url: "/"
      },
      {
        name: "Cricket Kit",
        id:5,
        productPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
        sellerId: 1,
        price: 2500,
        url: "/"
      },
      {
        name: "Cricket Kit",
        id:6,
        productPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
        sellerId: 1,
        price: 2500,
        url: "/"
      },

  ];
  return (
    <div className="products-container container">
      <Helmet>
        <title>Products - NITC</title>
      </Helmet>
      <div className="col-md-4 text-center text-md-start">
        <h2>Projects</h2>
      </div>
      <div className="row">
        {products.map((product,i) => {
          return (
            <div className="col-12 col-sm-6 col-lg-4 pb-5 px-3" key={i}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
