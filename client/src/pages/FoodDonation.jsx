import React, { useState } from "react";
import axios from "axios";

function FoodDonation() {
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      foodName,
      quantity,
      expiryDate,
    };
    // Send the form data to the server using fetch or Axios
    try {
      const response = await axios.post("http://localhost:3000/fooddonation", {
        ...formData,
        donor: "5f9f1b0b0b9b0b0b0b0b0b0b",
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Food Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="foodName">Food Name:</label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={(event) => setExpiryDate(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FoodDonation;
