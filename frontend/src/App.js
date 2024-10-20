import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import JerseyDetails from './JerseyDetails';
import JerseysPage from './JerseysPage';
import CartPage from './pages/CartPage';
import ProceedCheckoutPage from './pages/ProceedCheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';  
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [checkoutDetails, setCheckoutDetails] = useState({
    name: '',
    address: '',
    paymentMethod: ''
  });

  const addToCart = (jersey) => {
    const isItemInCart = cart.find(item => item.id === jersey.id);
    if (isItemInCart) {
      const updatedCart = cart.map(item =>
        item.id === jersey.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...jersey, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
  };

  const handleCheckoutDetails = (name, address, paymentMethod) => {
    setCheckoutDetails({ name, address, paymentMethod });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jerseys" element={<JerseysPage />} />
        <Route path="/jersey/:id" element={<JerseyDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route
          path="/checkout"
          element={
            <ProceedCheckoutPage
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              handleCheckoutDetails={handleCheckoutDetails}
            />
          }
        />
        <Route
          path="/confirmation"
          element={
            <ConfirmationPage
              cart={cart}
              name={checkoutDetails.name}
              address={checkoutDetails.address}
              paymentMethod={checkoutDetails.paymentMethod}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
