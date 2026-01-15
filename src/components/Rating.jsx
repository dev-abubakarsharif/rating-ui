import { useState } from "react";
import Star from "./Star";
const Rating = ({ heading = "Rate Your Experience", color = "gold" }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    rating > 0 && setSubmitted(true)
  };
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
            rating={rating}
            hover={hover}
            color={color}
            ratingClick={setRating}
            setHover={setHover}
          />
        ))}
      </div>
      {rating > 0 && (
        <p className="feedback"> {feedbackMessages[rating - 1]}</p>
      )}
      <button
        className="submit-btn"
        onClick={() => handleSubmit()}
        disabled={rating === 0}
      >
        Submit
      </button>
      {/* modal */}
      {
        submitted && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Thank You!</h2>
              <p>You rated us {rating} star{rating > 1 && 's' }</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Rating;
