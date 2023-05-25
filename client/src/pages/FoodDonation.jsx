import React, { useState } from "react";
import axios from "axios";
import "./FoodDonation.css";

function FoodDonation() {
  const [foodName, setFoodName] = useState("");
  const [foodTag, setFoodTag] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [address, setAddress] = useState("");

  const email = localStorage.getItem("email");
  console.log(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      foodName,
      foodTag,
      quantity,
      expiryDate,
      address,
      email,
    };
    console.log(formData);
    // Send the form data to the server using fetch or Axios
    try {
      const response = await axios.post("http://localhost:3000/fooddonation", {
        formData,
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="foodDonation_container">
      <div className="foodDonation_heading">
        <h1 className="heading-foodd">FOOD DONATION FORM</h1>
      </div>
      <div className="foodDonation_wrapper">
        <form className="food-donation_form" onSubmit={handleSubmit}>
          <div className="form_element">
            <label htmlFor="foodName">Food name</label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={foodName}
              onChange={(event) => setFoodName(event.target.value)}
            />
          </div>
          <div className="form_element">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>

          <div className="form_element">
            <label htmlFor="foodTag">Food type or tag</label>
            <select
              id="foodTag"
              name="foodTag"
              value={foodTag}
              onChange={(event) => setFoodTag(event.target.value)}
            >
              <option value="" disabled selected>
                Choose type
              </option>
              <option value="veg" style={{ color: "black" }}>
                Veg
              </option>
              <option value="nonveg" style={{ color: "black" }}>
                Non Veg
              </option>
            </select>
          </div>

          <div className="form_element">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
            />
          </div>
          <div className="form_element">
            <label htmlFor="address">Address</label>
            <input
              type="address"
              id="address"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <button id="foodDonation_submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FoodDonation;
