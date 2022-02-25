import React from 'react'
import "../css/MainCategoryItem.css";
export default function MainCategoryItem(props) {
  return (
      <>
        <div className="item_container">
            <div className="disIcon"></div>
            <div className="itemName">{props.heading}</div>
        </div>
      </>
  )
}