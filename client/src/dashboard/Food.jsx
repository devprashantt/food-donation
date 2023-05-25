import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import "./Food.css";

const Food = () => {
  const [food, setFood] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/allfoods");
      setFood(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const filteredFood =
    selectedTag === "all"
      ? food
      : food.filter((item) => item.foodTag === selectedTag);

  return (
    <div className="food">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          width: "100%",
        }}
      >
        <h1>Food Available</h1>
        <div
          className="tags"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <label htmlFor="tags">Filter by tag:</label>
          <select
            id="tags"
            name="tags"
            value={selectedTag}
            onChange={handleTagChange}
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #ccc",
            }}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        {filteredFood.map((item) => (
          <FoodCard
            key={item._id}
            name={item.foodName}
            quantity={item.quantity}
            date={item.expiryDate}
            address={item.address}
            tag={item.foodTag}
          />
        ))}
      </div>
    </div>
  );
};

export default Food;
