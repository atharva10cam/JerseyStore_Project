import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jerseyData from './data/jerseys';
import './JerseyDetails.css';

const JerseyDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the jersey by its ID
  const jersey = Object.values(jerseyData.club)
    .flat()
    .concat(Object.values(jerseyData.national).flat())
    .find(j => j.id === id);

  // Handle adding the jersey to the cart and showing an alert
  const handleAddToCart = () => {
    addToCart(jersey);
    alert(`${jersey.name} has been added to your cart.`);
    // Uncomment below to navigate to the cart page after adding
    // navigate('/cart');
  };

  // Handle buying now and navigate to checkout
  const handleBuyNow = () => {
    addToCart(jersey);
    navigate('/checkout');
  };

  // If the jersey is not found, show a not found message
  if (!jersey) {
    return <p>Jersey not found</p>;
  }

  return (
    <div className="jersey-details">
      <h2>{jersey.name}</h2>
      <img src={jersey.image} alt={jersey.name} className="jersey-detail-image" />
      
      <div className="jersey-info">
        <p><strong>Price:</strong> ₹{jersey.price}</p>
        <p><strong>Material:</strong> {jersey.material}</p>
        <p><strong>Quality:</strong> {jersey.quality}</p>
        <p><strong>Club Info:</strong> {jersey.clubInfo}</p>
        <p><strong>History:</strong> {jersey.history}</p>
        <p><strong>Washing Guidelines:</strong> {jersey.washingGuidelines}</p>
        <p><strong>Maintenance Tips:</strong> {jersey.maintenanceTips}</p>
      </div>
      
      {/* Size Chart */}
      <div className="size-chart">
        <h3>Size Chart</h3>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Chest (inches)</th>
              <th>Length (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>S</td><td>34-36</td><td>27</td></tr>
            <tr><td>M</td><td>38-40</td><td>28</td></tr>
            <tr><td>L</td><td>42-44</td><td>29</td></tr>
            <tr><td>XL</td><td>46-48</td><td>30</td></tr>
            <tr><td>XXL</td><td>50-52</td><td>31</td></tr>
          </tbody>
        </table>
      </div>

      {/* Add to Cart and Buy Now Buttons */}
      <div className="action-buttons">
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="buy-now" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default JerseyDetails;
