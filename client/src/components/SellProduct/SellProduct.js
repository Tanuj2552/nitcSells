import React from 'react';
import './SellProduct.css';

const SellProduct = () => {
  return (
    <>
        <div className='sell-container text-center py-5'>
            <h1 className='pb-3'>Sell Product</h1>
            <div className='py-3'>
                <label className='input_label'>Name</label>
                <div>
                    <input className='input_input border py-3 px-4 rounded-pill' type="text" name="name" value="a" />
                </div>
            </div>
            <div className='py-3'>
                <label className='input_label'>Price</label>
                <div>
                    <input className='input_input border py-3 px-4 rounded-pill' type="text" name="name" value="a" />
                </div>
            </div>
            <div className='py-3'>
                <label className='input_label'>Price</label>
                <div>
                    <textarea className='input_input border py-3 px-4 rounded-pill' type="text" name="name" value="a"></textarea>
                </div>
            </div>
        </div>
    </>
  )
}

export default SellProduct