import React from "react";
import "./Profile.css";
import { FaDonate } from "react-icons/fa";
import { BsCartPlusFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
<<<<<<< HEAD
  return <div>Name

<div className="wrapper">
  <div className="profile">
    <div className="profile_img_info">         
             <div className="img">   
             </div>
             <div className="info">
                  <p className="name">Aditya Gaikwad</p>
               <p className="place"><span></span>
                    IndiaName
                  </p>Name
             </div>
        </div>
    <div className="profile_skills">
            <div className="skills">
                <p>User Info</p>
                <ul>
                    <li><span className="icon"><MdEmail /></span>
                       <span className="title"> abhyuday7176@gmail.com</span>
                  </li>
                    <li><span className="icon"><BsFillTelephoneFill /></span>
                       <span className="title"> 9140949375</span></li> 
                </ul>
            </div>Name
            <div className="tags_wrap">
                <span className="tag">Edit Profile</span>
              <span className="tag">Change Username</span>
              <span className="tag">Change Password</span>
              <span className="tag">Add Funds</span>
            </div>
        </div>Name
  </div>
  <div className="profile_counts">
        <div className="profile_counts_wrap">
           <div className="item">
             <div className="icon"><FaDonate /></div>
             <div className="title">30 Donations</div>
          </div>
        </div>
        <div className="profile_counts_wrap">
           <div className="item">
             <div className="icon"><BsCartPlusFill /></div>
           <div className="title">Donate More</div>
          </div>
        </div>
        <div className="profile_counts_wrap">
           <div className="item">
             <div className="icon"><FaHandsHelping /></div>
           <div className="title">117 People Helped</div>
=======
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  console.log(user);
  return (
    <div>
      <div class="wrapper">
        <div class="profile">
          <div class="profile_img_info">
            <div class="img"></div>
            <div class="info">
              <p class="name">{user.name}</p>
              <p class="place">
                <span></span>
                India
              </p>
            </div>
          </div>
          <div class="profile_skills">
            <div class="skills">
              <p>User Info</p>
              <ul>
                <li>
                  <span class="icon">
                    <MdEmail />
                  </span>
                  <span class="title"> {user.email}</span>
                </li>
                <li>
                  <span class="icon">
                    <BsFillTelephoneFill />
                  </span>
                  <span class="title"> {user.number}</span>
                </li>
              </ul>
            </div>
            <div class="tags_wrap">
              <span class="tag">Edit Profile</span>
              <span class="tag">Change Username</span>
              <span class="tag">Change Password</span>
              <span class="tag">Add Funds</span>
            </div>
          </div>
        </div>
        <div class="profile_counts">
          <div class="profile_counts_wrap">
            <div class="item">
              <div class="icon">
                <FaDonate />
              </div>
              <div class="title">30 Donations</div>
            </div>
          </div>
          <div class="profile_counts_wrap">
            <div class="item">
              <div class="icon">
                <BsCartPlusFill />
              </div>
              <div class="title">Donate More</div>
            </div>
          </div>
          <div class="profile_counts_wrap">
            <div class="item">
              <div class="icon">
                <FaHandsHelping />
              </div>
              <div class="title">117 People Helped</div>
            </div>
>>>>>>> 625ab7679d0b5eae1e2efea421f634686de49469
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
