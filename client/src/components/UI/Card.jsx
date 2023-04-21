import React from 'react';
import "./Card.css";

const Card = ({name,des}) => {
  return (
    <div className='card'>
        <img src="https://picsum.photos/400/300"  alt="Ngo pic" />
        <div class="card-content">
    <h2 className='card-heading'>{name}</h2>
    <p className='card-description'>{des}</p>
    <button className='btn-card'>Donate Now</button>
  </div>
    </div>
  )
}

export default Card;