import React from 'react'
import "../css/TopBar.css"
export default function TopBar() {
  return (
    <div className="bar">
        <input type="text" className="searchBar" placeholder="Search" name="" id="" />
        <div className="upgrade">
            <div className="upgraderButton">Upgrade To Premium</div>
            <div className="settingButton"></div>
            <div className="notificationButton"></div>
        </div>
    </div>
  )
}
