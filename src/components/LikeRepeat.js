import React from 'react'
import "../css/LikeRepeat.css"
import heart from "../icons/heart_dark.png";
import playlist from "../icons/playlist.png";
import repeat from "../icons/repeat.png";
export default function LikeRepeat() {
  return (
    <>
      <div className="likeRepeatContainer">
        <div className="like"><img src= {heart} alt="" /></div>
        <div className="playlist"><img src={playlist} alt="" /></div>
        <div className="repeat"><img src={repeat} alt="" /></div>
      </div>
    </>
  )
}
