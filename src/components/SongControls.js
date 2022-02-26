import React from 'react'
import "../css/SongControls.css"
import back from "../icons/backward.png"
import play from "../icons/play.png"
import next from "../icons/fordward.png"
export default function SongControls(props) {
  return (
      <>
        <div className="SongControlContainer">
          <div className="playButton">
            <div className="btn prevButton"> <img src={back} alt="" /> </div>
            <div className="btn mainButton"> <img src={play} alt="" /> </div>
            <div className="btn nextButton"> <img src={next} alt="" /> </div>
          </div>
          <div className="seekControl">
            <div className="startTime">00:00</div>
            <div className="seekBar"><input type="range" min="1" max="100" className="slider"/></div>
            <div className="endTime">{props.endTime}</div>
          </div>
        </div>
      </>
  )
}
SongControls.defaultProps = {endTime : "00:00"}