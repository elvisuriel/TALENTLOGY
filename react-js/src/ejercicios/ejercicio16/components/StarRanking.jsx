import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index} className="rating-star">
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => handleRating(starValue)}
            />
            <FaStar
              className="star"
              size={24}
              color={
                starValue <= rating || starValue <= hoverRating
                  ? "#ffc107"
                  : "#e4e5e9"
              }
              onMouseEnter={() => setHoverRating(starValue)}
              onMouseLeave={() => setHoverRating(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;
