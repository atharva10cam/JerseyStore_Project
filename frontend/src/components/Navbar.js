import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Football Jerseys</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
