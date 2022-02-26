import React from 'react'
import "../css/MainContent.css"
import CategoryDivider from './CategoryDivider'
import MusicCategory from './MusicCategory'
export default function MainContent() {
  return (
    <div className="mainContentContainer">
      <MusicCategory heading="Top Music" />
      <CategoryDivider/>
      
    </div>
  )
}
