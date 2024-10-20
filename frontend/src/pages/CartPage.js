import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, updateCartQuantity, removeFromCart }) => {
  if (cart.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to shop</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <label>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
            />
          </label>
          <p>Total: ₹{item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;
