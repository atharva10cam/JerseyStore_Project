import React from 'react';
import './FeaturedJerseys.css';

const FeaturedJerseys = () => {
  const jerseys = [
    {
      name: 'Barcelona Home Kit',
      image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9a477f39-480c-41e8-9937-0e9e20312167/FCB+M+NK+DF+JSY+SS+STAD+HM.png',
      price: '₹985',
    },
    {
      name: 'Liverpool Home Kit',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35d0a3e6-c33c-46d2-9b60-a6418f50fd4c/liverpool-fc-2024-25-match-home-dri-fit-adv-football-authentic-shirt-0Xqfz6.png',
      price: '₹985',
    },
    {
      name: 'Argentina Home Kit',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Argentina_24_Home_Jersey_White_IP8409_21_model.jpg',
      price: '₹985',
    },
  ];

  return (
    <div className="featured-jerseys">
      <h2>Featured Jerseys</h2>
      <div className="jersey-list">
        {jerseys.map((jersey) => (
          <div className="jersey-item" key={jersey.name}>
            <img src={jersey.image} alt={jersey.name} />
            <h3>{jersey.name}</h3>
            <p><strong>{jersey.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJerseys;
