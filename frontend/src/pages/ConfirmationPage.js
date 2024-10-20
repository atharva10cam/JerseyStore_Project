import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = ({ cart, name, address, paymentMethod }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="confirmation-page">
      <h2>Order Confirmation</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="order-items">
          {cart.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-total">
          <h3>Total Amount: ₹{calculateTotal()}</h3>
        </div>
        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
        </div>
      </div>
      <div className="confirmation-actions">
        <Link to="/" className="continue-shopping-button">Continue Shopping</Link>
        <Link to="/order-history" className="order-history-button">View Order History</Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
