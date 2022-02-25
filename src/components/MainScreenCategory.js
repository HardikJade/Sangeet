import React from 'react'
import PropTypes from 'prop-types';
import "../css/MainScreenCategory.css";
import MainCategoryItem from './MainCategoryItem';
function getHeading(heading){
    if(heading === "Browse")
    {return ["Home","Playlist","Artist","Albums"];}
    else if(heading === "Discover")
    {return ["Radio","Events","Podcasts"];}
    else{return []}
}
export default function MainScreenCategory(props) {
    const iter = getHeading(props.heading);
  return (
      <>
        <div className="main_cat_cont">
            <div className="heading">{props.heading}</div>
            <div className="item_cont">{iter.map(element => {return(<MainCategoryItem key={element} heading = {element} />)})}</div>
        </div>
      </>
  )
}
MainScreenCategory.propTypes = {heading : PropTypes.string}
MainScreenCategory.defaultProps = {heading : "Heading"}
