import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { alertContext } from "../../Context/Alert";
import { SERVER_URL } from "../../EditableStuff/Config";
import ProductCard from "./ProductCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const stringSimilarity = require("string-similarity");

const Products = () => {
  const [products, setProducts] = useState([]);
  const [prods, setProds] = useState([]);
  const { showAlert } = useContext(alertContext);
  const [srch, setSrch] = useState("");
  
  
  const getAllProducts = async () => {
    let data;
    try {
      data = await axios.get(`${SERVER_URL}/product/getAllProducts`);
      console.log(srch);
      
      console.log("data", data.data[0]);
      setProducts(data.data[0]);
      setProds(data.data[0]);
    } catch (err) {
      // showAlert(data.data.err);
    }
  };

  const searchExecute = () => {
    console.log(prods.length);

    const map = new Map();
    let sim1 = [];
    let sim2 = [];
    for (let i = 0; i < prods.length; i++) {
      sim1.push(stringSimilarity.compareTwoStrings(srch, prods[i].productDescription));
    }

    for (let i = 0; i < prods.length; i++) {
      sim2.push(stringSimilarity.compareTwoStrings(srch, prods[i].productName));
    }

    for (let i = 0; i < prods.length; i++) {
      if(map.has(sim1[i] + sim2[i])){
        map.set(sim1[i] + sim2[i] - 0.0001, i);
      }
      else{
        map.set(sim1[i] + sim2[i], i);
      }
    }

    let map1 = new Map([...map.entries()].sort());

    map1 = new Map(Array.from(map1).reverse());

    let final_prods = [];

    for (var entry of map1.entries()) {
      final_prods.push(prods[entry[1]]);
      console.log(prods[entry[1]].productName);
    }
    console.log(final_prods.length);
    
    for(var i=0;i<prods.length; i++){
      products[i] = final_prods[i];
    }

  };

  const navigate = useNavigate();
  useEffect(() => {
    const u = localStorage.getItem("username");
    if (!u) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    searchExecute();
  }, [srch]);

  return (
    <>
      <Navbar />
      <div className="py-3 products-container container">
        <Helmet>
          <title>Products - NITC</title>
        </Helmet>
        <h1 className="py-4 text-center">Products</h1>
        <div className="pb-5">
          <input
            type="search"
            className="border w-100 px-4 py-3 rounded-pill fs-5"
            value={srch}
            onChange={(e) => setSrch(e.target.value)}
            placeholder="Search here.."
          />
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
