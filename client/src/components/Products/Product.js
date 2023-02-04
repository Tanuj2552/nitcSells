import { useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { SERVER_URL } from "../../EditableStuff/Config";
import { alertContext } from "../../Context/Alert";

const Product = () => {
  const params = new useParams();
  const id = params.id;
  const {showAlert} = useContext(alertContext);
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    let data;
    try{
      data = await axios.get(`${SERVER_URL}/product/getProduct/${id}`);
      console.log('data',data.data[0][0]);
      setProduct(data.data[0][0]);
    }catch(err){
      showAlert(data.data.err,"danger");
    }
  }
  useEffect(() => {
    // setProduct(products.filter((x) => x.id == id)[0]);
    getProduct();
  }, []);

  return (
    <>
    {product && <div className="product-container container">
      <Helmet>
        <title>Product - NITC</title>
      </Helmet>
      <div className="row p-5">
        <div className="col-lg-5">
          <img
            src={product.imageId}
            alt={product.productName}
            className="img-fluid rounded"
            style={{ width: "30rem", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-7">
          <div className="row">
            <h3 className="text-center pt-4 pt-lg-1 pb-1">{product.productName}</h3>
            <p>Price: {product.productPrice}</p>
            <p>Description: {product.productDescription}</p>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default Product;
