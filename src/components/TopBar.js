import React from 'react'
import "../css/TopBar.css"
import setting from "../icons/setting.png"
import bell from "../icons/bell.png"
export default function TopBar() {
  return (
    <div className="bar">
        <input type="text" className="searchBar" placeholder="Search" name="" id="" />
        <div className="upgrade">
            {/* <div className="upgraderButton">Upgrade To Premium</div> */}
            <div className="settingButton"><img src={setting} alt="" /></div>
            <div className="notificationButton"><img src={bell} alt="" /></div>
        </div>
    </div>
  )
}
