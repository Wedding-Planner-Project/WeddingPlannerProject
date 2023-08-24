import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ initialRating, onSave }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onSave(selectedRating); // Call the onSave prop to update the rating in the database
  };

  const handleStarHover = (hovered) => {
    setHoveredRating(hovered);
  };

  const renderStars = () => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const starClassName =
        i <= (hoveredRating !== null ? hoveredRating : rating)
          ? 'star selected'
          : 'star';

      stars.push(
        <span
          key={i}
          className={starClassName}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => handleStarHover(null)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

StarRating.propTypes = {
  initialRating: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default StarRating;
