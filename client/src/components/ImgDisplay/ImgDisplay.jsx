import React from 'react';
import "./ImgDisplay.css"
import { Link } from 'react-router-dom';

const ImgDisplay = () => {
  return (
    <div className='first-display'>
      <div className="text">
        <h1 className='img-text'>Feeding The <span>Hungry</span></h1>
        <h3>We Serve Food To The Needy People</h3>
        <button className='btn'><Link to="/signup">Donate Now</Link></button>
      </div>
    </div>
  )
}

export default ImgDisplay;