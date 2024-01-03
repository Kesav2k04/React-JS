import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Navbar.css'; 

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();

    alert('Subscribed!');
  };

  return (
    <footer className="footer">
      <Typography variant="body2">
        &copy; 2023 FarmFresco Store. All Rights Reserved.
      </Typography>
      <div className="footer-icons">
        <IconButton color="inherit" href="https://www.instagram.com/">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" href="https://www.facebook.com/">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://www.youtube.com/">
          <YouTubeIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com/">
          <TwitterIcon />
        </IconButton>
      </div>
      <Typography variant="body2" className="footer-subscribe">
        Subscribe for newsletter
        <form onSubmit={handleSubscribe}>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </Typography>
      <Typography variant="body2">
        <a href="/">About Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </Typography>
    </footer>
  );
};

export default Footer;
