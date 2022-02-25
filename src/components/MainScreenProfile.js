import React from 'react'
import "../css/MainScreenProfile.css"
export default function MainScreenProfile() {
  return (
      <>
        <div className="profile_container">
            <div className="profile_pic">
                <div className="image_container">
                    <img src="" alt="Profile Image" className="main_profile" />
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
