import React from 'react';
import { Link } from 'react-router-dom';
import './pages/HomePage.css'; // Ensure to include your global style
import Footer from './components/Footer';



const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="https://img1.yna.co.kr/photo/yna/YH/2022/03/31/PYH2022033102490031500_P4.jpg" alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">Discover the Best Football Jerseys</h1>
          <p className="hero-subtitle">Explore the latest collections and limited editions</p>
          <Link to="/jerseys" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Jerseys Section */}
      <section className="featured-section">
        <h2 className="section-title">Featured Jerseys</h2>
        <div className="jersey-row">
          {/* Barcelona Home Jersey */}
          <div className="jersey-card">
            <img src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9a477f39-480c-41e8-9937-0e9e20312167/FCB+M+NK+DF+JSY+SS+STAD+HM.png" alt="Barcelona Home" className="jersey-image" />
            <div className="jersey-info">
              <h3>Barcelona Home Kit</h3>
              <p className="jersey-price">€90</p>
              <p className="jersey-brand">Nike</p>
            </div>
          </div>

          {/* Liverpool Home Jersey */}
          <div className="jersey-card">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35d0a3e6-c33c-46d2-9b60-a6418f50fd4c/liverpool-fc-2024-25-match-home-dri-fit-adv-football-authentic-shirt-0Xqfz6.png" alt="Liverpool Home" className="jersey-image" />
            <div className="jersey-info">
              <h3>Liverpool Home Kit</h3>
              <p className="jersey-price">₹985</p>
              <p className="jersey-brand">Nike</p>
            </div>
          </div>

          {/* Argentina Home Jersey */}
          <div className="jersey-card">
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Argentina_24_Home_Jersey_White_IP8409_21_model.jpg" alt="Argentina Home" className="jersey-image" />
            <div className="jersey-info">
              <h3>Argentina Home Kit</h3>
              <p className="jersey-price">$80</p>
              <p className="jersey-brand">Adidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promotional-section">
        <h2 className="promo-title">Special Offer!</h2>
        <p className="promo-text">Get 20% off on your first purchase. Use code <strong>SAVE20</strong> at checkout.</p>
        <Link to="/offers" className="promo-button">Learn More</Link>
      </section>
    </div>

    

    
  );
};

export default HomePage;
