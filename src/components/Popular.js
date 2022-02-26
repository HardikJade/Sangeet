import React from 'react'
import "../css/Popular.css"
import SongItem from './SongItem'
export default function Popular() {
  return (
    <div className="popularContainer">
      <div className="heading">Popular</div>
      <div className="songList">
        <SongItem/>
      </div>
    </div>
  )
}
