import React from 'react'
import PropTypes from 'prop-types';
import image from "../img/default_song.jpg"
import "../css/RunningSong.css";
export default function RunningSongInfo(props) {
  return (
    <>
      <div className="runningSongContainer">
        <div className="runningSongProfile">
          <img src={props.image} alt="" className="profileImage" />
        </div>
        <div className="description">
          <div className="songName">{props.name}</div>
          <div className="authorName">{props.author}</div>
        </div>
      </div>
    </>
  )
}
RunningSongInfo.protoType = {
  image : PropTypes.string,
  name : PropTypes.string,
  author : PropTypes.string
}
RunningSongInfo.defaultProps = {
  image : image,
  name : "Unknown",
  author : "Unknown"
}