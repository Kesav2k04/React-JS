import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import TermsConditions from './TermsConditions';
import './styles.css';
import LoginSignUp from './LoginSignUp';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignup" element={<LoginSignUp />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
