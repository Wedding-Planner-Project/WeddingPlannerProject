import React, { useState } from 'react';
import StarRating from './StarRating'; // Make sure to adjust the import path
import './Ratings.css'; // Import your CSS file for styling

const RatingsApp = () => {
  const [ratings, setRatings] = useState({}); // You might fetch initial ratings from the database here

  const handleRatingSave = (order_id, rating) => {
    // Update the ratings in the local state or send a request to update the database
    setRatings((prevRatings) => ({
      ...prevRatings,
      [order_id]: rating,
    }));
  };

  return (
    <div className="Ratings">
      <h1>Wedding Planner App</h1>
      <div className="orders-container">
        {Object.keys(ratings).map((order_id) => (
          <div key={order_id} className="order">
            <h2>Order ID: {order_id}</h2>
            <StarRating
              initialRating={ratings[order_id] || 0}
              onSave={(rating) => handleRatingSave(order_id, rating)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsApp;
