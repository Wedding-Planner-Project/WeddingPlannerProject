// import React, { useState } from 'react';
// import { Row, Col } from 'react-bootstrap';
// import StarRating from './StarRating'; // Import your StarRating component

// import './CardStyles.css'; // Import the CSS file for card styles

// const NewRatings = () => {
//   const [ratings, setRatings] = useState({});

//   const handleRatingSave = (order_id, rating) => {
//     setRatings((prevRatings) => ({
//       ...prevRatings,
//       [order_id]: rating,
//     }));
//   };

//   const getRandomCouple = () => {
//     // Replace this with your actual data fetching logic or sample data
//     return  {
//         name: "Elegant Events",
//         review: "We had a wonderful experience working with Elegant Events. Their attention to detail and professionalism made our wedding day perfect.",
//       },
//       {
//         name: "Dreamy Weddings",
//         review: "From start to finish, Dreamy Weddings exceeded our expectations. They went above and beyond to ensure that every aspect of our wedding was flawless.",
//       },
//       {
//         name: "Enchanted Celebrations",
//         review: "Choosing Enchanted Celebrations was one of the best decisions we made for our wedding. Their expertise and creativity brought our vision to life.",
//       },
//       {
//         name: "Blissful Moments",
//         review: "The team at Blissful Moments made our wedding day truly special. Their dedication and personalized approach made the planning process enjoyable and stress-free.",
//       },
//       {
//         name: "Charming Affairs",
//         review: "Our experience with Charming Affairs was exceptional. They paid close attention to our preferences and delivered beyond our expectations.",
//       },
//       {
//         name: "Glamour Weddings",
//         review: "Glamour Weddings transformed our vision into a stunning reality. Their attention to detail and creativity made our day unforgettable.",
//       },
//       {
//         name: "Timeless Events",
//         review: "Timeless Events brought our fairytale wedding to life. Their expertise and coordination ensured that everything flowed seamlessly.",
//       },
//       {
//         name: "Graceful Occasions",
//         review: "Graceful Occasions' professionalism and personal touch made our wedding day stress-free and magical. We're grateful for their exceptional service.",
//       },
//       {
//         name: "Radiant Celebrations",
//         review: "Radiant Celebrations' dedication to perfection turned our dreams into reality. Our wedding day was a true reflection of our love and joy.",
//       }
//   };

//   return (
//     <Row className="justify-content-center">
//       <Col>
//         <div className="container card-container">
//           <div className="row">
//             {Array.from({ length: 9 }).map((_, index) => {
//               const { name, review,  } = getRandomCouple();
//               const order_id = index + 1;
//               return (
//                 <div className="col-md-4" key={order_id}>
//                   <div className="card-sl card-style">
//                     <div className="card-image">
//                     </div>
//                     <div className="card-heading">
//                       {name}
//                     </div>
//                     <div className="card-text">
//                       {review}
//                     </div>
//                     <div className="card-rating">
//                       <StarRating
//                         initialRating={ratings[order_id] || 0}
//                         onSave={(rating) => handleRatingSave(order_id, rating)}
//                       />
//                     </div>
//                     <a href="/reviews" className="card-button card-button-style">
//                       Rate Vendor
//                     </a>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default NewRatings;


import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import StarRating from './StarRating'; // Import your StarRating component
import './CardStyles.css'; // Import the CSS file for card styles

const NewRatings = () => {
  const [ratings, setRatings] = useState({});
  const [ratedVendors, setRatedVendors] = useState([]);

  const handleRatingSave = async (vendorEmail, starRating) => {
    try {
      const enumRating = mapStarRatingToEnum(starRating);
      if (!enumRating) {
        console.error('Invalid star rating');
        return;
      }

      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          custEmail: 'customer@example.com',
          vendEmail: vendorEmail,
          servName: 'Service Name',
          rating: enumRating,
        }),
      });

      if (response.ok) {
        console.log('Rating submitted successfully');
        setRatedVendors((prevVendors) => [...prevVendors, vendorEmail]);
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const mapStarRatingToEnum = (starRating) => {
    switch (starRating) {
      case 1:
        return 'POOR';
      case 2:
        return 'AVERAGE';
      case 3:
        return 'GOOD';
      case 4:
        return 'VERYGOOD';
      case 5:
        return 'EXCELLENT';
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchRatedVendors = async () => {
      try {
        const response = await fetch('/api/ratings');
        if (response.ok) {
          const data = await response.json();
          const vendorEmails = data.map((rating) => rating.vendEmail);
          setRatedVendors(vendorEmails);
        }
      } catch (error) {
        console.error('Error fetching rated vendors:', error);
      }
    };

    fetchRatedVendors();
  }, []);

  // Fetch vendor data from the backend
  const fetchVendorData = async () => {
    try {
      const response = await fetch('/api/vendors');
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error fetching vendor data:', error);
    }
    return [];
  };

  const [vendorData, setVendorData] = useState([]);

  useEffect(() => {
    const loadVendorData = async () => {
      const vendors = await fetchVendorData();
      setVendorData(vendors);
    };
    loadVendorData();
  }, []);

  return (
    <Row className="justify-content-center">
      <Col>
        <div className="container card-container">
          <div className="row">
            {vendorData.map((vendor, index) => {
              const { name, review, email } = vendor;
              const order_id = index + 1;
              if (ratedVendors.includes(email)) {
                return (
                  <div className="col-md-4" key={order_id}>
                    <div className="card-sl card-style">
                      <div className="card-heading">
                        {name}
                      </div>
                      <div className="card-text">
                        {review}
                      </div>
                      <div className="card-rating">
                        <StarRating
                          initialRating={ratings[order_id] || 0}
                          onSave={(rating) => handleRatingSave(email, rating)}
                        />
                      </div>
                      <a href="/reviews" className="card-button card-button-style">
                        Rate Vendor
                      </a>
                    </div>
                  </div>
                );
              }
              return null; // Don't render vendors the user hasn't rated
            })}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default NewRatings;

