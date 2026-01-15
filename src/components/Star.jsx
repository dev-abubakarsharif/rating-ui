import React from "react";

const Star = ({ star,rating,hover,color, ratingClick, setHover}) => {
  return <span 
  onClick={ () => ratingClick(star)}
  onMouseEnter={() => setHover(star)}
 onMouseLeave={() => setHover(0)}
  className="star"
  style ={{color : star <= (hover || rating) ? color : '#ccc'}}
  >{"\u2605"}</span>;
};

export default Star;
