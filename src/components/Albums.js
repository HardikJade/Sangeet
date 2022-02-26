import React from 'react'
import "../css/Album.css"
import AlbumItem from './AlbumItem'
export default function Albums() {
  return (
    <div className="albumContainer">
      <div className="heading">Recommended Album</div>
      <div className="albumList">
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
        <AlbumItem name="Lights" />
      </div>
    </div>
  )
}
