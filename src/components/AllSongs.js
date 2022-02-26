import React from 'react'
import PropTypes from 'prop-types';
import "../css/AllSongs.css"
import AllSongItem from './AllSongItem';
export default function AllSongs(props){
  return (
      <>
        <div className="allSongContainer">
            <div className="heading">{props.heading}</div>
            <div className="allSongList">
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
                <AllSongItem/>
            </div>
        </div>
      </>
  )
}
AllSongs.propTypes = {heading : PropTypes.string}
AllSongs.defaultProps = {heading : "All Songs"}