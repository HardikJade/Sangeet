import React from 'react'
import "../css/AlbumItem.css";
import thumbNail from "../img/default_album.png";
import PropTypes from 'prop-types'
export default function AlbumItem(props) {
  return (
    <>
        <div className="AlbumContainer">
            <div className="albumThumbnail">
                <img src={props.thumb} draggable = "false" alt="" className="thumbNail" />
            </div>
            <div className="albumName">{props.name}</div>
        </div>
    </>
  )
}
AlbumItem.protoTypes = {
    thumb : PropTypes.string,
    name: PropTypes.string
}
AlbumItem.defaultProps = {
    thumb : thumbNail,
    name : "Unknown"
}