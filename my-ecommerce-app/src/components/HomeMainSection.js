// HomeMainSection.js
import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

function HomeMainSection() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const fetchRandomReviews = () => {
      const shuffledReviews = reviews.sort(() => Math.random() - 0.5);
      const selectedReviews = shuffledReviews.slice(0, 2);
      setRandomReviews(selectedReviews);
    };

    fetchRandomReviews();
  }, []); 

  return (
    <div>
      <section>
        <h2>About Us</h2>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction</p>
        <button onClick={() => console.log('Shop Now button clicked')}>Shop Now</button>
      </section>

      <section>
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index}>
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <div>
              {[...Array(review.stars)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomeMainSection;
