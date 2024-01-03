import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h6">FarmFresco</Typography>
          </Link>
        </div>
        <div className="navbar-icons">
          <Link to="/" className="navbar-link">
            Categories
          </Link>
          {/* <Link to="/vegetables" className="navbar-link">
            Vegetables
          </Link> */}
          <IconButton color="inherit">
            <LocationOnIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Link to="/LoginSignup" className="navbar-link">
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
