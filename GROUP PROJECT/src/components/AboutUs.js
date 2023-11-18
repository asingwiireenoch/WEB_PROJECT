import React from 'react';
import './AboutUs.css'; // Import your CSS file
import HomeNavBar from './HomepageNav';
const AboutUsPage = () => {
  return (
    <div>
      <HomeNavBar />
      <header>
        <h1></h1>
        <nav>
          <ul>
          
          </ul>
        </nav>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>Welcome to Loyalty Restaurant! We are not just a restaurant; we are a culinary experience. Our passion lies in serving delicious meals crafted with care and precision, using only the freshest locally-sourced ingredients. Our dedicated chefs aim to create culinary masterpieces that will not only satisfy your taste buds but also leave a lasting impression. At Loyalty Restaurant, we are committed to providing exceptional service in a warm and inviting atmosphere. Come and join us to savor our delectable dishes and indulge in a truly memorable dining experience.</p>
      </section>

      <section className="special-dish">
        <h2>Special Dish of the Month</h2>
        <p>Introducing our special dish of the month: <strong>Grilled Salmon with Lemon Herb Butter</strong>. Savor the perfect blend of fresh Atlantic salmon, marinated in herbs, and grilled to perfection. Topped with a luscious lemon herb butter sauce, this dish is a culinary delight that will transport you to seafood heaven.</p>
      </section>

      <section className="customer-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial">
          <p>"Loyalty Restaurant exceeded my expectations! The ambiance, the service, and, most importantly, the food were all exceptional. I highly recommend trying their special dishes."</p>
          <p className="customer-name">- Namande Tracy</p>
        </div>
        <div className="testimonial">
          <p>"I had a fantastic dining experience at Loyalty Restaurant. The attention to detail in every dish is truly commendable. Can't wait to visit again!"</p>
          <p className="customer-name">- Ssemanda Rodney Ben</p>
        </div>
      </section>

      <section className="sidebar">
        <h3>Opening Hours</h3>
        <hr />
        <p>Monday - Friday: 9 AM - 10 PM<br />Saturday - Sunday: 10 AM - 11 PM</p>
      </section>

      <footer>
        <p>&copy; 2023 Loyalty Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
