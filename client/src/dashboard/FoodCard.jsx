import React from 'react';
import {FaCalendarAlt, FaCartArrowDown, FaHome} from "react-icons/fa";
import "./FoodCard.css";

const FoodCard = () => {

  const food="pulses";
  return (
    <div>
        <div class="card">
  <img  className='foodcard-img' src="https://source.unsplash.com/random/?{food}" alt="Card Image" />
  <div class="card-content">
    <h2 className='food-title'>Rice</h2>
    <div className="food-details">
        <ul className="icons">
            <li><span className='icons-name'><FaCartArrowDown /></span>: 100kg</li>
            <li><span className='icons-name'><FaCalendarAlt /></span>: 18 March 2023</li>
            <li><span className='icons-name'><FaHome /></span>: 4/580 Parks Lane,New Delhi</li>
        </ul>
    </div>
    <button className='food-btn'>Check Status</button>
  </div>
</div>
    </div>
  )
}

export default FoodCard