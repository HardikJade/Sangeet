import React from 'react'
import PropTypes from 'prop-types';
import profile from "../img/default_song.jpg"
import "../css/AllSongItem.css"
export default function AllSongItem(props) {
  return (
    <>
        <div className="AllSongContainer">
            <div className="songProfile"><img src={props.image} alt="" className="songImage" /></div>
            <div className="description">
                <div className="name">{props.name}</div>
                <div className="length">{props.length}</div>
                <div className="artist">{props.artist}</div>
            </div>
        </div>
    </>
  )
}
AllSongItem.defaultProps = {
    name : "Unkown",
    image : profile,
    length : "00:00",
    artist : ""
}
AllSongItem.propTypes = {
    name : PropTypes.string,
    length : PropTypes.string,
    artist : PropTypes.string
}