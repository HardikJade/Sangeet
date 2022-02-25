import React from 'react'
import "../css/MainScreenProfile.css"
export default function MainScreenProfile() {
  return (
      <>
        <div className="profile_container">
            <div className="profile_pic">
                <div className="image_container">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile Image" className="main_profile" />
                </div>
            </div>
            <div className="description">
                <div className="name"><span>Hardik Jade</span></div>
                <div className="username">email@gmail.com</div>
            </div>
        </div>
      </>
  )
}
