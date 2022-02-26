import React from 'react'
import profile from "../img/profile.png"
import PropTypes from 'prop-types';
import "../css/MainScreenProfile.css"
export default function MainScreenProfile(props) {
  return (
      <>
        <div className="profile_container">
            <div className="profile_pic">
                <div className="image_container">
                    <img src={props.profile} alt="Profile Image" className="main_profile" />
                </div>
            </div>
            <div className="description">
                <div className="name"><span>{props.name}</span></div>
                <div className="username">{props.email}</div>
            </div>
        </div>
      </>
  )
}
MainScreenProfile.propTypes = {
    profile : PropTypes.string,
    name : PropTypes.string,
    email : PropTypes.string
}
MainScreenProfile.defaultProps = {
    profile : profile,
    name : "Unknown",
    email: "Unkown"
}