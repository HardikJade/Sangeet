import React from 'react'
import "../css/MusicCategory.css"
import MusicCard from './MusicCard'
export default function MusicCategory(props) {
  return (
    <div className="MusicCatContainer">
        <div className="heading">{props.heading}</div>
        <div className="CardHolder">
          <MusicCard name="John Doe" />
          <MusicCard name="John Doe" />
          <MusicCard name="John Doe" />
          <MusicCard name="John Doe" />
          <MusicCard name="John Doe" />
        </div>
    </div>
  )
}
