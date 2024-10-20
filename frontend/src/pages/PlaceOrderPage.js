import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceOrderPage.css';

const PlaceOrderPage = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="place-order-page">
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your purchase. Your order is being processed and you will receive an email confirmation shortly.</p>
      <button className="continue-shopping-button" onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default PlaceOrderPage;
