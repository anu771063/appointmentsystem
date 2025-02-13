import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './home'; // Import your homepage component
import AboutPage from './about';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header /> {/* Navigation */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
