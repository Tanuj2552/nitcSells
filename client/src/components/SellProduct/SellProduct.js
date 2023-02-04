import React, { useEffect, useState } from 'react';
import './SellProduct.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const SellProduct = () => {
    const [prod,setProd] = useState({
        name:"",
        price:"",
        description:""
    });
    
    const navigate = useNavigate();
    useEffect(() => {
      const u=localStorage.getItem("username");
      if(!u){
        navigate('/login')
      }
    }, [])
  return (
    <>
    <Navbar />
        <div className='sell-container text-center py-5'>
            <h1 className='pb-3'>Sell Product</h1>
            <div className='py-3'>
                <label className='input_label'>Name</label>
                <div>
                    <input className='input_input border py-3 px-4' type="text" name="name" value="a" />
                </div>
            </div>
            <div className='py-3'>
                <label className='input_label'>Price</label>
                <div>
                    <input className='input_input border py-3 px-4' type="text" name="name" value="a" />
                </div>
            </div>
            <div className='py-3'>
                <label className='input_label'>Description</label>
                <div>
                    <textarea className='input_input border py-3 px-4' type="text" name="name" value="a"></textarea>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default SellProduct