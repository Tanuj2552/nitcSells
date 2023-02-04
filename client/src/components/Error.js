import React from 'react'
import image from '../EditableStuff/error404.jpg';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Error = () => {
  return (
    <>
    <Navbar />
        <div className='text-center error-container'>
          <img src={image} alt="Error 404" style={{height:'40rem'}}/>
        </div>
        <Footer />
    </>
  )
}

export default Error