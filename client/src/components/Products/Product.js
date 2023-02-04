import { useParams } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { SERVER_URL } from "../../EditableStuff/Config";
import { alertContext } from "../../Context/Alert";
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Product = () => {
  const params = new useParams();
  const id = params.id;
  const navigate = useNavigate();
  const {showAlert} = useContext(alertContext);
  const [product, setProduct] = useState(null);
  const [contacts,setContacts] = useState(null);
  const getProduct = async () => {
    let data;
    try{
      data = await axios.get(`${SERVER_URL}/product/getProduct/${id}`);
      console.log('data',data.data[0][0]);
      const c = data.data[0][0].userId
      setProduct(data.data[0][0]);
      const data2 = await axios.get(`${SERVER_URL}/user/getuser/${c}`);
      console.log('data2',data.data[0][0]);
      setContacts(data2.data[0][0]);
    }catch(err){
      showAlert(data.data.err,"danger");
    }
  }

  const deleteProduct = async () => {
    let res;
    try{
      res = await axios.delete(`${SERVER_URL}/auth/deleteProduct/${product.productId}`);
      
      navigate('/');
    }catch(err){

    }
  }
  
  useEffect(() => {
    const u=localStorage.getItem("username");
    if(!u){
      navigate('/login')
    }
  }, [])
  const [userId,setUserId] = useState(null);
  useEffect(() => {
    const u = localStorage.getItem("userId");
    if(u){
      setUserId(u);
    }
    getProduct();
  }, []);
  return (
    <>
    <Navbar />
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
            <div></div>
            <p>Price: {product.productPrice}</p>
            <p>Description: {product.productDescription}</p>
            {contacts && 
            <div>
              <p>Mobile No: {contacts.mobileNo}</p>
              <p>EMail: {contacts.mail}</p>
            </div>}
            {userId==product.userId && <button className="btn btn-danger" onClick={deleteProduct}>Delete</button>}
          </div>
        </div>
      </div>
    </div>}
    <Footer />
    </>
  );
};

export default Product;
