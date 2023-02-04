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
        userid:"",
        imageid: "",
        productdescription: ""
    });

    const navigate = useNavigate();
    useEffect(() => {
        const u = localStorage.getItem("userId");
        if (!u) {
            navigate('/login')
        }
        setProd({...prod,['userid']:u});
    }, [])
    console.log('prod',prod);
    const handleInput = (e) => {
        setProd({...prod, [e.target.name]:e.target.value});
    }

    const handlePhoto = (e) => {
        setProd({...prod, [e.target.name]: e.target.files[0]});
    }

    const AddProduct = async (e) => {
        e.preventDefault();
            // const data = new FormData();
            // const photoname = Date.now() + prod.photo.name;
            // data.append("name",photoname);
            // data.append("photo",prod.photo);
            // console.log('formdata',data);
            // var imgurl;

            // try{
            //     const img = await axios.post(`${SERVER_URL}/imgupload`,data);
            //     console.log('img',img);
            //     imgurl = img.data;
            //     prod.photo=imgurl
            // }catch(err){
            //     console.log('photoerr',err);
            // }
            // console.log('imgurl',imgurl);
            
            try{
                
                const data = await axios.post(`${SERVER_URL}/product/postproduct`,
                    prod,
                    {
                        headers:{"Content-Type" : "application/json"}
                    }
                );
                
                if(data.status === 422 || !data){
                    window.alert("Invalid Regsitration");
                    console.log("Invalid Regsitration");
                }
                else{
                    console.log('data');
                    console.log(data);
                    console.log("Regsitration Successfull");
                    navigate('/team');
                }
            }catch(err){
                console.log('err',err);
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
                            <input className='input_input border py-3 px-4' type="text" name="productname" value={prod.productname} onChange={handleInput} required/>
                        </div>
                    </div>
                    <div className='py-3'>
                        <label className='input_label'>Price</label>
                        <div>
                            <input className='input_input border py-3 px-4' type="text" name="productprice" value={prod.productprice} onChange={handleInput} required />
                        </div>
                    </div>

                    <div className='py-3'>
                        <label for="file-input" className='input_label'>
                            Product Images
                            <div className='input_input border p-4 align-items-center text-start font-weight-normal' style={{ height: "68px" }}></div>
                        </label>
                        <div>
                            <input type="file" id="file-input" name="imageid" style={{ display: "none" }}  onChange={handlePhoto} required/>
                        </div>
                    </div>



                    <div className='py-3'>
                        <label className='input_label'>Description</label>
                        <div>
                            <textarea className='input_input border py-3 px-4' type="text" name="productdescription" style={{ outline: "none" }} onChange={handleInput} required> value={prod.productdescription}</textarea>
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