import React from 'react'
import "../css/HamburgerMenu.css"
import close from "../icons/close.png"
import home from "../icons/home.png"
import artist from "../icons/artist.png"
import playlist from "../icons/playlist.png"
import group from "../icons/group.png"
import radio from "../icons/radio.png"
import event from "../icons/event.png"
import podcast from "../icons/mic.png"
import { toggleMenu } from '../App'
export default function HamburgerMenu() {
  return (
    <>
      <div className="hamburgerContainer">
        <div className="closeMe" onClick={toggleMenu}><div className="closeContainer"><img src={close} alt="" /></div></div>
        <div className="contentContainer">
          <div className="itemContainer">
            <div className="heading">Browse</div>
            <div className="item">
              <div className="icon"><img src={home} className="iconImg" /></div>
              <div className="title">Home</div>
            </div>
            <div className="item">
              <div className="icon"><img src={playlist} className="iconImg" /></div>
              <div className="title">Playlist</div>
            </div>
            <div className="item">
              <div className="icon"><img src={artist} className="iconImg" /></div>
              <div className="title">Artist</div>
            </div>
            <div className="item">
              <div className="icon"><img src={group} className="iconImg" /></div>
              <div className="title">Albums</div>
            </div>
          </div>
          <div className="itemContainer">
            <div className="heading">Discover</div>
            <div className="item">
              <div className="icon"><img src={radio} className="iconImg" /></div>
              <div className="title">Radio</div>
            </div>
            <div className="item">
              <div className="icon"><img src={event} className="iconImg" /></div>
              <div className="title">Events</div>
            </div>
            <div className="item">
              <div className="icon"><img src={podcast} className="iconImg" /></div>
              <div className="title">Podcasts</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
    