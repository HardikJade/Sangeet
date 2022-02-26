import React from 'react'
import PropTypes from 'prop-types';
import default_dp from "../img/default.png"
import "../css/SongItem.css"
export default function SongItem(props) {
  return (
      <>
        <div className="itemContainer">
            <div className="dispImage">
                <img src={props.dp} className="image" />
            </div>
            <div className="description">
                <div className="name">{props.name}</div>
                <div className="artist">{props.artist}</div>
            </div>
            <div className="time">{props.time}</div>
            <div className="heart"></div>
        </div>
      </>
  )
}
SongItem.propTypes={
    dp : PropTypes.string,
    name : PropTypes.string,
    artist : PropTypes.string,
    time : PropTypes.string
}
SongItem.defaultProps = {
    dp : default_dp,
    name : "Unknown",
    artist : "Unknown",
    time : "00:00"
}