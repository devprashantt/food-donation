import React from "react";
import "./Profile.css";
import { FaDonate } from "react-icons/fa";
import { BsCartPlusFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  console.log(user);
  return (
    <div>
      <div className="wrapper">
        <div className="profile">
          <div className="profile_img_info">
            <div className="img"></div>
            <div className="info">
              <p className="name">{user.name}</p>
              <p className="place">
                <span></span>
                India
              </p>
            </div>
          </div>
          <div className="profile_skills">
            <div className="skills">
              <p>User Info</p>
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
            </div>
            <div className="tags_wrap">
              <span className="tag">Edit Profile</span>
              <span className="tag">Change Username</span>
              <span className="tag">Change Password</span>
              <span className="tag">Add Funds</span>
            </div>
          </div>
        </div>
        <div className="profile_counts">
     <div className="profile_counts_wrap">
            <div className="item">
              <div className="icon">
                <FaDonate />
              </div>
              <div className="title">30 Donations</div>
            </div>
          </div>
          <div className="profile_counts_wrap">
            <div className="item">
              <div className="icon">
                <BsCartPlusFill />
              </div>
              <div className="title">Donate More</div>
            </div>
          </div>
          <div className="profile_counts_wrap">
            <div className="item">
              <div className="icon">
                <FaHandsHelping />
              </div>
              <div className="title">117 People Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;