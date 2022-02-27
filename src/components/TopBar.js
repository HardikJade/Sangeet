import React from 'react'
import "../css/TopBar.css"
import setting from "../icons/setting.png"
import bell from "../icons/bell.png"
import menu from "../icons/menu.png"
import { toggleMenu } from '../App'
export default function TopBar() {
  return (
    <div className="bar">
        <div className="menu_hamburger" onClick={toggleMenu}><img src={menu} alt="" className="menu" /></div>
        <input type="text" className="searchBar" placeholder="Search" name="" id="" />
        <div className="upgrade">
            {/* <div className="upgraderButton">Upgrade To Premium</div> */}
            <div className="settingButton"><img src={setting} alt="" /></div>
            <div className="notificationButton"><img src={bell} alt="" /></div>
        </div>
    </div>
  )
}
