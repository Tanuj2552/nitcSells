import React from 'react'
import image from '../EditableStuff/error404.jpg';

const Error = () => {
  return (
    <>
        <div className='text-center error-container'>
          <img src={image} alt="Error 404" style={{height:'40rem'}}/>
        </div>
    </>
  )
}

export default Error