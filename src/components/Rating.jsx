import { useState } from "react";
import Star from "./Star";
const Rating = ({ heading = "Rate Your Experience", color = 'gold' }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //  setRating()

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];
  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <Star 
          key={star} 
          star={star}
          rating ={rating}
          hover = {hover}
          color = {color}
          ratingClick = {setRating}
          setHover={setHover}
          />
          // <span
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)}
          //   key={star}
          //   className={`star ${star <= (hover || rating) ? "active" : ""}`}
          // >
          //   {"\u2605"}
          // </span>
        ))}
      </div>
      {rating > 0 && (
        <p className="feedback"> {feedbackMessages[rating - 1]}</p>
      )}
    </div>
  );
};

export default Rating;
