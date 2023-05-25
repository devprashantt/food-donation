import React, { useState } from "react";

import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { FaDonate } from "react-icons/fa";
import { BsCartPlusFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [number, setNumber] = useState(user.number);
  const [email, setEmail] = useState(user.email);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setName(user.name);
    setNumber(user.number);
    setEmail(user.email);
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put("http://localhost:3000/update", {
        id: user._id,
        name,
        number,
        email,
      });
      console.log(response.data);
      // Update the user object in localStorage if needed
      localStorage.setItem("user", JSON.stringify(response.data));
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="profile">
          <div className="profile_img_info">
            <div className="img"></div>
            <div className="info">
              {!editing ? (
                <>
                  <p className="name">{user.name}</p>
                  <p className="place">
                    <button className="logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button onClick={handleSaveChanges}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              )}
            </div>
          </div>
          <div className="profile_skills">
            <div className="skills">
              <p>User Info</p>
              {!editing ? (
                <ul>
                  <li>
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <span className="title"> {user.email}</span>
                  </li>
                  <li>
                    <span className="icon">
                      <BsFillTelephoneFill />
                    </span>
                    <span className="title"> {user.number}</span>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="tags_wrap">
              {!editing ? (
                <span className="tag" onClick={handleEditProfile}>
                  Edit Profile
                </span>
              ) : null}
              <span className="tag">Change Username</span>
              <span className="tag">Change Password</span>
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Profile;
