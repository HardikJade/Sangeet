import React from 'react'
import LikeRepeat from './LikeRepeat'
import RunningSongInfo from './RunningSongInfo'
import SongControls from './SongControls'
import "../css/BottomControl.css"
export default function BottomControl() {
  return (
    <>
        <div className="bottomControl">
            <RunningSongInfo name="Hardik Jade" author="Hardik Jade"/>
            <SongControls/>
            <LikeRepeat/>
        </div>
    </>
  )
}
