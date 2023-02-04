import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../../Context/Alert";
import { SERVER_URL } from "../../EditableStuff/Config";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { showAlert } = useContext(alertContext);

  const getAllProducts = async () => {
    let data;
    try {
      data = await axios.get(`${SERVER_URL}/product/getAllProducts`);
      console.log('data', data);
      setProducts(data.data[0]);
    } catch (err) {
      // showAlert(data.data.err);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const u=localStorage.getItem("username");
    if(!u){
      navigate('/login')
    }
  }, [])

  useEffect(()=>{
    getAllProducts();
  },[]);

  return (
    <>

      <Navbar />
      <div className="products-container container">
        <Helmet>
          <title>Products - NITC</title>
        </Helmet>
        <div className="col-md-4 text-center text-md-start">
          <h2>Projects</h2>
        </div>
        <div className="row">
          {products.map((product, i) => {
            return (
              <div className="col-12 col-sm-6 col-lg-4 pb-5 px-3" key={i}>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Products;
