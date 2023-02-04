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
  const { showAlert } = useContext(alertContext);
  const [srch, setSrch] = useState("");
  console.log('srch',srch)
  let prods = [];
  console.log('prods',prods);
  const getAllProducts = async () => {
    let data;
    try {
      data = await axios.get(`${SERVER_URL}/product/getAllProducts`);
      console.log(srch);
      prods = data.data[0];
      console.log("data", data);
      setProducts(data.data[0]);
    } catch (err) {
      // showAlert(data.data.err);
    }
  };

  const searchExecute = () => {
    console.log('executing');
    const map = new Map();
    let sim1 = [];
    let sim2 = [];
    for (let i = 0; i < prods.length; i++) {
      sim1.push(stringSimilarity.compareTwoStrings(srch, prods[i].description));
    }

    for (let i = 0; i < prods.length; i++) {
      sim2.push(stringSimilarity.compareTwoStrings(srch, prods[i].title));
    }

    for (let i = 0; i < prods.length; i++) {
      map.set(sim1[i] + sim2[i], i);
    }

    let map1 = new Map([...map.entries()].sort());

    map1 = new Map(Array.from(map1).reverse());

    let final_prods = [];

    for (var entry of map1.entries()) {
      final_prods.push(prods[entry[1]]);
      console.log(prods[entry[1]].title);
    }

    for (var i = 0; i < prods.length; i++) {
      prods[i] = final_prods[i];
    }
    console.log('final_prods',final_prods)
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
