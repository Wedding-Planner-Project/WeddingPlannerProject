import React, { useState } from 'react';

const WeddingPlannerApp = () => {
  const [ratings, setRatings] = useState({});

  const handleRatingSave = (order_id, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [order_id]: rating,
    }));
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <h1>Wedding Planner App</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {[1, 2, 3].map((order_id) => (
          <div key={order_id} style={orderStyle}>
            <h2>Order ID: {order_id}</h2>
            <div style={starRatingStyle}>
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  style={starStyle(value, ratings[order_id])}
                  onClick={() => handleRatingSave(order_id, value)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const orderStyle = {
  border: '1px solid #ccc',
  padding: '1rem',
  borderRadius: '8px',
  textAlign: 'center',
  width: '200px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const starRatingStyle = {
  fontSize: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const starStyle = (value, currentRating) => ({
  cursor: 'pointer',
  color: value <= (currentRating || 0) ? 'orange' : 'gray',
});

export default WeddingPlannerApp;
