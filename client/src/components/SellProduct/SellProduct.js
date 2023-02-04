import React, { useEffect, useState } from 'react';
import './SellProduct.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../EditableStuff/Config';

const SellProduct = () => {
    const [prod, setProd] = useState({
        productname: "",
        productprice: "",
        image: "",
        userid: "",
        productdescription: ""
    });


    const navigate = useNavigate();
    useEffect(() => {
        const u = localStorage.getItem("userId");
        if (!u) {
            navigate('/login')
        }
        setProd({ ...prod, ['userid']: u });
    }, [])
    console.log('prod', prod);
    const handleInput = (e) => {
        setProd({ ...prod, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setProd({ ...prod, [e.target.name]: e.target.files[0] });
        console.log('image', e.target.files[0])
    }

    const AddProduct = async (e) => {
        e.preventDefault();


        try {
            const d = new FormData();
            d.append("image", prod.image);
            d.append("productname", prod.productname);
            d.append("productprice", prod.productprice);
            d.append("userid", prod.userid);
            d.append("productdescription", prod.productdescription);
            
            const data = await axios.post(`${SERVER_URL}/product/postproduct`,d);

            if (data.status === 422 || !data) {
                window.alert("Invalid Regsitration");
                console.log("Invalid Regsitration");
            }
            else {
                console.log("Regsitration Successfull");
                navigate('/');
            }
        } catch (err) {
            console.log('err', err);
        }
    }

    return (
        <>
            <Navbar />
            <div className='sell-container text-center py-5'>
                <h1 className='pb-3'>Sell Product</h1>
                <form method="POST" onSubmit={AddProduct} encType="multipart/form-data">
                    <div className='py-3'>
                        <label className='input_label'>Name</label>
                        <div>
                            <input className='input_input border py-3 px-4' type="text" name="productname" value={prod.productname} onChange={handleInput} required />
                        </div>
                    </div>
                    <div className='py-3'>
                        <label className='input_label'>Price</label>
                        <div>
                            <input className='input_input border py-3 px-4' type="text" name="productprice" value={prod.productprice} onChange={handleInput} required />
                        </div>
                    </div>

                    <div className='py-3'>
                        <label for="file-input" className='input_label2'>
                            <span className='input_label'>Product Images</span>
                            <div className={`input_input border ${prod.image ? 'py-3' : 'py-4'} px-4 align-items-center text-start`} style={prod.image ? {} : { height: "63px" }}>{prod.image ? prod.image.name : ""}</div>
                        </label>
                        <div>
                            <input type="file" id="file-input" name="image" style={{ display: "none" }} onChange={handlePhoto} required />
                        </div>
                    </div>

                    <div className='py-3'>
                        <label className='input_label'>Description</label>
                        <div>
                            <textarea className='input_input border py-3 px-4' type="text" name="productdescription" style={{ outline: "none" }} onChange={handleInput} required>{prod.productdescription}</textarea>
                        </div>
                    </div>
                    <div className='py-3'>
                        <div>
                            <input className='input_input border py-3 px-4 btn btn-primary' type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SellProduct