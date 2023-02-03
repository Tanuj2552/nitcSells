import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Product = () => {
  const params = new useParams();
  const id = params.id;
  const [product, setProduct] = useState(null);
  const products = [
    {
      name: "Cricket Kit",
      id: 1,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/",
    },
    {
      name: "Cricket Kit",
      id: 2,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/",
    },
    {
      name: "Cricket Kit",
      id: 3,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/",
    },
    {
      name: "Cricket Kit",
      id: 4,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/",
    },
    {
      name: "Cricket Kit",
      id: 5,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/",
    },
    {
      name: "Cricket Kit",
      id: 6,
      productPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf8IwVVqVyj3UZ1I3Sssy5vVB_wTuvtIXeA&usqp=CAU",
      sellerId: 1,
      price: 2500,
      url: "/",
    },
  ];
  useEffect(() => {
    let p = products.filter((x) => x.id === id);
    setProduct(p[0]);
  }, []);
  
  return (
    <>
    {product && <div className="product-container container">
      <Helmet>
        <title>Product - NITC</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-5">
          <img
            src={product.productPhoto}
            alt={product.name}
            className="img-fluid rounded"
            style={{ width: "30rem", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-7">
          <div className="row">
            <h3 className="text-center pt-4 pt-lg-1 pb-1">{product.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: product.name }}></p>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default Product;
