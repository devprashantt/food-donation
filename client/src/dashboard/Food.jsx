import React, { useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import "./Food.css";

const Food = () => {
  const [food, setFood] = useState([]);

  axios
    .get("http://localhost:3000/allfoods")
    .then((response) => {
      setFood(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="food">
      {food.map((item) => {
        return (
          <FoodCard
            key={item._id}
            name={item.foodName}
            quantity={item.quantity}
            date={item.expiryDate}
            address={item.address}
          />
        );
      })}
    </div>
  );
};

export default Food;
