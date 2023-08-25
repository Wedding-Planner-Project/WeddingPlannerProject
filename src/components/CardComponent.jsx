import React from "react";
import { Row, Col } from "react-bootstrap"; // Assuming you are using react-bootstrap
import coupleImg5 from "../resources/Couple5.jpg";
import coupleImg2 from "../resources/Couple2.jpg";
import coupleImg3 from "../resources/Couple3.jpg";
import coupleImg1 from "../resources/Couple1.jpg";
import coupleImg4 from "../resources/Couple4.jpg";

import img1 from "../resources/Couple6.jpg";
import img2 from "../resources/Couple7.jpg";
import img3 from "../resources/Couple8.webp";

const CardComponent = () => {
  const getRandomCouple = () => {
    const couples = [
      {
        name: "John and Emily",
        review:
          "We were amazed by the beautiful decorations provided by the wedding planner. It added a magical touch to our special day. Highly recommended!",
        imageUrl: coupleImg1,
      },
      {
        name: "Michael and Sarah",
        review:
          "The wedding planner helped us find the perfect venue for our dream wedding. The venue exceeded our expectations and made our day unforgettable.",
        imageUrl: coupleImg4,
      },
      {
        name: "David and Jessica",
        review:
          "Thanks to the wedding planner, we have a stunning gallery of memories from our special day. The attention to detail captured in the photos is remarkable.",
        imageUrl: coupleImg1,
      },
      {
        name: "Alex and Emma",
        review:
          "From start to finish, the wedding planner was a true professional. They managed every detail flawlessly, allowing us to enjoy every moment of our wedding day without worries.",
        imageUrl: coupleImg2,
      },
      {
        name: "William and Olivia",
        review:
          "The wedding planner's creativity transformed our vision into reality. The decorations, the ambiance, and the flawless coordination made our day truly extraordinary.",
        imageUrl: coupleImg3,
      },
      {
        name: "Daniel and Sophia",
        review:
          "Our heartfelt gratitude to the wedding planner for turning our dreams into a breathtaking reality. The attention to detail and personalized touch made our wedding a truly unique and unforgettable experience.",
        imageUrl: coupleImg3,
      },
      {
        name: "Ryan and Ava",
        review:
          "Choosing this wedding planner was the best decision we made. The team's professionalism and dedication made our wedding journey stress-free and our day beyond memorable.",
        imageUrl: coupleImg2,
      },
      {
        name: "Jacob and Mia",
        review:
          "The wedding planner's keen eye for design and coordination created a day that felt like a fairytale. Every element was carefully crafted, making our wedding a true masterpiece.",
        imageUrl: img2,
      },
      {
        name: "Ethan and Lily",
        review:
          "The wedding planner's attention to detail and flawless execution made our wedding day seamless and magical. It's an experience we'll cherish forever.",
        imageUrl: img1,
      },
      {
        name: "Noah and Sophia",
        review:
          "The wedding planner's expertise and creativity turned our ideas into a reality that exceeded our expectations. Our day was filled with joy and unforgettable moments.",
        imageUrl: img3,
      },
    ];

    // Generate a random index to select a couple
    const randomIndex = Math.floor(Math.random() * couples.length);
    return couples[randomIndex];
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col>
          <div
            className="container"
            style={{ marginTop: "25px", marginBottom: "25px", width: "250rem" }}
          >
            <div className="row">
              {Array.from({ length: 9 }).map((_, index) => {
                const { name, review, imageUrl } = getRandomCouple();
                return (
                  <div
                    key={index}
                    className="col-md-4"
                    style={{ marginBottom: "20px" }}
                  >
                    {" "}
                    {/* Add inline style here */}
                    <div className="card-sl" style={{ minHeight: "400px" }}>
                      <div
                        className="card-image"
                        style={{ minHeight: "240px" }}
                      >
                        <img src={imageUrl} alt={name} />
                      </div>
                      <div className="card-heading">{name}</div>
                      <div className="card-text">{review}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardComponent;
