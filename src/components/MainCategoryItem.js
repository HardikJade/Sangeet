import React from 'react'
import "../css/MainCategoryItem.css";
import PropTypes from 'prop-types'
import home from "../icons/home.png"
import artist from "../icons/artist.png"
import playlist from "../icons/playlist.png"
import group from "../icons/group.png"
import radio from "../icons/radio.png"
import event from "../icons/event.png"
import podcast from "../icons/mic.png"
export default function MainCategoryItem(props) {
  let heading = props.heading;
  let image = null;
  if(heading === "Home"){image = home;}
  else if(heading === "Playlist"){image = playlist}
  else if(heading === "Artist"){image = artist}
  else if(heading === "Albums"){image = group}
  else if(heading === "Radio"){image = radio}
  else if(heading === "Events"){image = event}
  else if(heading === "Podcasts"){image = podcast}
  return (
      <>
        <div className="item_container">
            <div className="disIcon"><img src={image} alt="" /></div>
            <div className="itemName">{heading}</div>
        </div>
      </>
  )
}
MainCategoryItem.propTypes = {heading : PropTypes.string}
MainCategoryItem.defaultProps = {heading : ""}