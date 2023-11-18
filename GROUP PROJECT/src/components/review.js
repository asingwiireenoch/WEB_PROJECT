import React from 'react';
import './reviews.css'; // Import your CSS file

const Reviews = () => {
  return (
    <div>
      <header>
        <h1>Customer Reviews and Ratings</h1>
        {/* Navigation links if needed */}
      </header>

      <main>
        <section className="reviews">
          <h2>Customer Reviews</h2>
          {/* Display customer reviews here */}
          <div className="review">
            <div className="user-info">
              <img src="/images/download.jpeg" alt="User Avatar" />
              <p>John Doe</p>
            </div>
            <p className="review-text">The food was amazing! Highly recommended.</p>
            <div className="rating">
              {/* Insert star rating icons here */}
            </div>
          </div>
          {/* Add more reviews as needed */}
        </section>

        <section className="leave-review">
          <h2>Leave a Review</h2>
          {/* Review form for customers to leave their reviews */}
          <form>
            <input type="text" placeholder="Your Name" required />
            <textarea placeholder="Write your review..." required></textarea>
            <div className="rating">
              {/* Rating stars selection (e.g., using radio buttons) */}
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Reviews;
