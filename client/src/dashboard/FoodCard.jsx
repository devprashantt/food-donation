import React from "react";
import { FaCalendarAlt, FaCartArrowDown, FaHome } from "react-icons/fa";
import "./FoodCard.css";

const FoodCard = ({ name, quantity, date, address }) => {
 
  return (
    <div>
      <div class="card">
        <img
          className="foodcard-img"
          src="https://source.unsplash.com/random/?food"
          alt="Card Image"
        />
        <div class="card-content">
          <h2 className="food-title">{name}</h2>
          <div className="food-details">
            <ul className="icons">
              <li>
                <span className="icons-name">
                  <FaCartArrowDown />
                </span>
                : {quantity} kg
              </li>
              <li>
                <span className="icons-name">
                  <FaCalendarAlt />
                </span>
                : {date}
              </li>
              <li>
                <span className="icons-name">
                  <FaHome />
                </span>
                : {address}
              </li>
            </ul>
          </div>
          <button className="food-btn">Check Status</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
