import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import JerseyDetails from './JerseyDetails';
import Footer from './Footer';

function App() {
  const [jerseys, setJerseys] = React.useState([]);

  React.useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      const fetchedJerseys = [
        {
          id: 1,
          name: 'Barcelona Home Jersey',
          description: 'Official Barcelona home jersey for 2024 season.',
          price: 79.99,
          imageUrl: 'https://example.com/images/barcelona-home-jersey.jpg'
        },
        {
          id: 2,
          name: 'Liverpool Home Jersey',
          description: 'Official Liverpool home jersey for 2024 season.',
          price: 89.99,
          imageUrl: 'https://example.com/images/liverpool-home-jersey.jpg'
        }
      ];
      setJerseys(fetchedJerseys);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home jerseys={jerseys} />} />
          <Route path="/jersey/:id" element={<JerseyDetails jerseys={jerseys} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
