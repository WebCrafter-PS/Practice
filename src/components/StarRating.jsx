//star rating component allows users to rate and provide feedback

import { useState } from "react";

//on content or products by selecting a specified number of stars.
const StarRating = () => {
  const [starArray, setStarArray] = useState(Array(5).fill("empty"));

  const clickHandler = (index) => {
    const updatedStars = starArray.map((_, i) =>
      i <= index ? "fill" : "empty"
    );
    setStarArray(updatedStars)
  };
  return (
    <>
      <h1>Rating</h1>
      <div className="star">
        {starArray.map((color, index) => (
          <span
            className={`${color}`}
            key={index}
            onClick={() => clickHandler(index)}
          >
            ★
          </span>
        ))}
      </div>
    </>
  );
};
export default StarRating;
