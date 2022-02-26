import React from 'react';
import thumb from "../img/default.png"
import PropTypes from 'prop-types'
import "../css/MusicCard.css";
export default function MusicCard(props) {
  return (
    <>
        <div className="CardBody">
            <div className="CardImageHolder">
              <img draggable="false" className="thumbnail" src={props.thumbNail} alt="Thumbnail" />
            </div>
            <div className="CardDescription">
              <div className="name">{props.name}</div>
              <div className="artist">{props.artist}</div>
            </div>
        </div>
    </>
  )
}
MusicCard.propTypes = {
  thumbNail : PropTypes.string,
  name : PropTypes.string,
  artist : PropTypes.string
}
MusicCard.defaultProps = {
  thumbNail : thumb,
  name : "Unknown",
  artist : "Unknown"
}