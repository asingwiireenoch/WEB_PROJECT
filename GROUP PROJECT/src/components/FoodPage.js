import React, { useState } from 'react';
import './FoodPage.css'; // Import your CSS styles
import { Link } from 'react-router-dom';
import HomeNavBar from './HomepageNav';
import HoverRating from './Ratings&Review'

const PlacedOrders = ({ orders }) => (
   
  <div className="placed-orders">
    <h2>Placed Orders</h2>
    <ul>
      {orders.map((order, index) => (
        <li key={index}>
          {order.map((item) => (
            <span key={item.id}>{item.name} - ${item.price.toFixed(2)}</span>
          ))}
        </li>
      ))}
    </ul>
  </div>
);

const Receipt = ({ order, totalBill, paymentMethod, dateTime }) => (
  <div>
  <div className="receipt">
    <h2>Receipt</h2>
    <ul>
      {order.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price.toFixed(2)}
        </li>
      ))}
    </ul>
    <p>Total Bill: ${totalBill}</p>
    <p>Payment Method: {paymentMethod}</p>
    <p>Date and Time: {dateTime}</p>
  </div>
  <HoverRating />
  </div>
);

const FoodPage = () => {
  // Define your food categories with unique images and associated foods
  const foodCategories = [
    {
        id: 1,
        name: 'Breakfast',
        image: 'https://images.pexels.com/photos/10781076/pexels-photo-10781076.jpeg?auto=compress&cs=tinysrgb&w=600',
        foods: [
          { id: 101, name: 'English Breakfast Tea', price: 500 },
          { id: 102, name: 'Croissant', price: 300 },
          { id: 103, name: 'Fruit Salad', price: 400 },
        ],
      },
      {
        id: 2,
        name: 'Lunch',
        image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg',
        foods: [
          { id: 201, name: 'Chicken Caesar Salad', price: 700 },
          { id: 202, name: 'Margherita Pizza', price: 600 },
          { id: 203, name: 'Vegetable Wrap', price: 450 },
        ],
      },
      {
        id: 3,
        name: 'Dinner',
        image: 'https://images.pexels.com/photos/19001607/pexels-photo-19001607/free-photo-of-salmon-served-with-rice-and-salad-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600',
        foods: [
          { id: 301, name: 'Grilled Salmon', price: 800 },
          { id: 302, name: 'Beef Steak', price: 900 },
          { id: 303, name: 'Pasta Alfredo', price: 650 },
        ],
      },
      {
        id: 4,
        name: 'Dessert',
        image: 'https://images.pexels.com/photos/19088361/pexels-photo-19088361/free-photo-of-chocolate-bars-with-nuts.jpeg?auto=compress&cs=tinysrgb&w=600',
        foods: [
          { id: 401, name: 'Chocolate Cake', price: 450 },
          { id: 402, name: 'Tiramisu', price: 500 },
          { id: 403, name: 'Fruit Sorbet', price: 350 },
        ],
      },
      {
        id: 5,
        name: 'Snacks',
        image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=600',
        foods: [
          { id: 501, name: 'Nachos with Cheese', price: 300 },
          { id: 502, name: 'Popcorn', price: 200 },
          { id: 503, name: 'Chicken Wings', price: 450 },
        ],
      },
      {
        id: 6,
        name: 'Drinks',
        image: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600',
        foods: [
          { id: 601, name: 'Iced Coffee', price: 250 },
          { id: 602, name: 'Fruit Smoothie', price: 350 },
          { id: 603, name: 'Lemonade', price: 200 },
        ],
      },
  ];

  // State to manage the selected category, the user's order, placed orders, and the selected payment method
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [order, setOrder] = useState([]);
  const [placedOrders, setPlacedOrders] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [receipt, setReceipt] = useState(null);

  // Function to handle category selection
  const selectCategory = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // Function to handle adding an item to the order
  const addItemToOrder = (food) => {
    setOrder((prevOrder) => [...prevOrder, food]);
  };

  // Function to handle removing an item from the order
  const removeItemFromOrder = (foodId) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== foodId));
  };

  // Function to calculate the total bill
  const calculateTotalBill = () => {
    return order.reduce((total, item) => total + item.price, 0);
  };

  // Function to handle payment method selection
  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  // Function to handle order placement and display receipt
  const placeOrder = () => {
    const totalBill = calculateTotalBill().toFixed(2);
    const paymentMethod = selectedPaymentMethod || 'N/A';
    const dateTime = new Date().toLocaleString(); // Get current date and time

    const confirmationMessage = `Are you sure you want to place the order?\nTotal Bill: $${totalBill}\nPayment Method: ${paymentMethod}`;

    if (window.confirm(confirmationMessage)) {
      alert('Order placed successfully!');
      const newPlacedOrder = [...order];
      setPlacedOrders((prevOrders) => [...prevOrders, newPlacedOrder]);
      setOrder([]); // Clear the order after placing it
      setReceipt({ order: newPlacedOrder, totalBill, paymentMethod, dateTime });
    }
  };

  return (
    <div>
      <HomeNavBar />
    <div className="food-page">
      <h1>Food Categories</h1>
      <Link to='/Reservations'>
        <button className='Reservation-btn'> Reservations</button>
      </Link>
      
      <div className="category-grid">
        
        {foodCategories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'selected' : ''}`}
            onClick={() => selectCategory(category.id)}
          >
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
            
          </div>
        ))}
         </div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/TENnUTzZb-w?si=dzdv0xeiVYuBB1L8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
      {selectedCategory && (
        <div className="food-list">
          <h2>{foodCategories.find((category) => category.id === selectedCategory).name} Foods</h2>
          <ul>
            {foodCategories
              .find((category) => category.id === selectedCategory)
              .foods.map((food) => (
                <li key={food.id}>
                  {food.name} - ${food.price.toFixed(2)}
                  <button onClick={() => addItemToOrder(food)}>+</button>
                </li>
              ))}
          </ul>
        </div>
       
      )}

      {placedOrders.length > 0 && <PlacedOrders orders={placedOrders} />}

      {receipt && <Receipt {...receipt} />}

      {order.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {order.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeItemFromOrder(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Bill: ${calculateTotalBill().toFixed(2)}</p>
          <div className="payment-methods">
            <p>Select Payment Method:</p>
            <select onChange={(e) => selectPaymentMethod(e.target.value)}>
              <option value="" disabled selected>
                Choose a payment method
              </option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>
          <button onClick={placeOrder}>Order</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default FoodPage;
