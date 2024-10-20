import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProceedCheckoutPage.css';

const ProceedCheckoutPage = ({ cart, updateCartQuantity, removeFromCart }) => {
  const [quantities, setQuantities] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize quantities from cart
    const initialQuantities = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: newQuantity
      }));
      updateCartQuantity(id, newQuantity);
    } else if (newQuantity === 0) {
      handleRemoveItem(id);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handlePlaceOrder = () => {
    if (!name || !address) {
      alert('Please fill in all required fields.');
      return;
    }

    // You can implement order placement logic here or call an API
    alert('Order placed successfully!');
    navigate('/confirmation'); // Navigate to order confirmation page
  };

  if (cart.length === 0) {
    return <p>Your cart is empty. <a href="/">Go back to shop</a></p>;
  }

  return (
    <div className="proceed-checkout-page">
      <h2>Proceed to Checkout</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                value={quantities[item.id] || item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, e)}
              />
              <p>Total: ₹{item.price * (quantities[item.id] || item.quantity)}</p>
              <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-form">
        <h3>Shipping Information</h3>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
        <label htmlFor="payment-method">Payment Method:</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>
      <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default ProceedCheckoutPage;
